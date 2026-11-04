import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SITE_ORIGINS = new Set([
  "https://amirmostafakharazi.com",
  "https://www.amirmostafakharazi.com",
]);
const SITE_HOSTNAMES = new Set(["amirmostafakharazi.com", "www.amirmostafakharazi.com"]);
const MAX_REQUEST_BYTES = 48 * 1024;
const ALLOWED_PROJECT_TYPES = new Set([
  "Python Development",
  "Machine Learning",
  "Deep Learning / AI",
  "Computer Vision",
  "Web Design",
  "Other",
]);

class PayloadTooLargeError extends Error {}

function corsHeaders(origin: string | null): Record<string, string> {
  const headers: Record<string, string> = { Vary: "Origin" };
  if (origin && SITE_ORIGINS.has(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
    headers["Access-Control-Allow-Methods"] = "POST, OPTIONS";
    headers["Access-Control-Allow-Headers"] = "apikey, content-type";
    headers["Access-Control-Max-Age"] = "86400";
  }
  return headers;
}

function json(body: Record<string, unknown>, status: number, origin: string | null) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
  });
}

async function readLimitedBody(request: Request): Promise<string> {
  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BYTES) {
    throw new PayloadTooLargeError();
  }

  const reader = request.body?.getReader();
  if (!reader) throw new SyntaxError("Missing request body");

  const chunks: Uint8Array[] = [];
  let totalBytes = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      totalBytes += value.byteLength;
      if (totalBytes > MAX_REQUEST_BYTES) {
        await reader.cancel();
        throw new PayloadTooLargeError();
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }

  const body = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return new TextDecoder().decode(body);
}

async function hashRateLimitKey(secret: string, value: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(value));
  return Array.from(new Uint8Array(signature), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function verifyTurnstile(token: string, secret: string): Promise<boolean> {
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) throw new Error(`Turnstile returned ${response.status}`);

  const result: unknown = await response.json();
  if (!result || typeof result !== "object") return false;
  const verification = result as { success?: unknown; hostname?: unknown; action?: unknown };
  return verification.success === true &&
    typeof verification.hostname === "string" &&
    SITE_HOSTNAMES.has(verification.hostname) &&
    verification.action === "project_inquiry";
}

Deno.serve(async (request) => {
  const origin = request.headers.get("origin");
  if (!origin || !SITE_ORIGINS.has(origin)) return json({ error: "Forbidden" }, 403, origin);
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders(origin) });
  }
  if (request.method !== "POST") return json({ error: "Method not allowed" }, 405, origin);
  if (request.headers.get("content-type")?.split(";", 1)[0].trim().toLowerCase() !== "application/json") {
    return json({ error: "Content-Type must be application/json" }, 415, origin);
  }

  let rawBody: string;
  try {
    rawBody = await readLimitedBody(request);
  } catch (error) {
    if (error instanceof PayloadTooLargeError) {
      return json({ error: "Request body is too large" }, 413, origin);
    }
    if (error instanceof SyntaxError) return json({ error: "Invalid request body" }, 400, origin);
    console.error("Unable to read project submission");
    return json({ error: "Unable to submit project brief" }, 500, origin);
  }

  let payload: unknown;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return json({ error: "Invalid JSON" }, 400, origin);
  }
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return json({ error: "Invalid project details" }, 400, origin);
  }

  const data = payload as Record<string, unknown>;
  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const projectType = typeof data.projectType === "string" ? data.projectType.trim() : "";
  const details = typeof data.details === "string" ? data.details.trim() : "";
  const turnstileToken = typeof data.turnstileToken === "string" ? data.turnstileToken : "";
  const website = typeof data.website === "string" ? data.website.trim() : "";

  if (website) return json({ error: "Invalid project details" }, 400, origin);
  if (
    name.length < 2 || name.length > 120 || /[\u0000-\u001f\u007f]/.test(name) ||
    email.length > 320 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !ALLOWED_PROJECT_TYPES.has(projectType) ||
    details.length < 10 || details.length > 10000 ||
    !turnstileToken || turnstileToken.length > 2048
  ) {
    return json({ error: "Invalid project details" }, 400, origin);
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const resendApiKey = Deno.env.get("RESEND_API_KEY");
  const emailFrom = Deno.env.get("EMAIL_FROM");
  const turnstileSecret = Deno.env.get("TURNSTILE_SECRET_KEY");
  const rateLimitSecret = Deno.env.get("RATE_LIMIT_HASH_SECRET");
  if (
    !supabaseUrl || !serviceRoleKey || !resendApiKey || !emailFrom || !turnstileSecret ||
    !rateLimitSecret || new TextEncoder().encode(rateLimitSecret).byteLength < 32
  ) {
    console.error("Project submission secrets are not fully configured");
    return json({ error: "Project submission is temporarily unavailable" }, 503, origin);
  }

  try {
    if (!await verifyTurnstile(turnstileToken, turnstileSecret)) {
      return json({ error: "Security verification failed" }, 400, origin);
    }

    const forwardedFor = request.headers.get("x-forwarded-for");
    const clientIp = request.headers.get("x-real-ip") ??
      request.headers.get("cf-connecting-ip") ??
      forwardedFor?.split(",").at(-1)?.trim();
    if (!clientIp || clientIp.length > 64) {
      console.error("Client IP is unavailable for rate limiting");
      return json({ error: "Project submission is temporarily unavailable" }, 503, origin);
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey);
    const [ipHash, emailHash] = await Promise.all([
      hashRateLimitKey(rateLimitSecret, `ip:${clientIp}`),
      hashRateLimitKey(rateLimitSecret, `email:${email.toLowerCase()}`),
    ]);
    const { data: allowed, error: rateLimitError } = await supabase.rpc(
      "consume_project_submission_rate_limit",
      { p_ip_hash: ipHash, p_email_hash: emailHash },
    );
    if (rateLimitError) throw rateLimitError;
    if (allowed !== true) return json({ error: "Too many submissions. Please try again later." }, 429, origin);

    const { error: insertError } = await supabase.from("project_messages").insert({
      name,
      email,
      project_type: projectType,
      details,
    });
    if (insertError) throw insertError;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: emailFrom,
        to: ["amirmostafakh@gmail.com"],
        reply_to: email,
        subject: `New project inquiry: ${projectType}`,
        text: `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\nProject details:\n${details}`,
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!resendResponse.ok) throw new Error(`Email provider returned ${resendResponse.status}`);

    return json({ success: true }, 200, origin);
  } catch (error) {
    console.error("submit-project failed:", error instanceof Error ? error.message : "Unknown error");
    return json({ error: "Unable to submit project brief" }, 500, origin);
  }
});
