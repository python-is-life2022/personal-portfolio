import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

type ProjectMessage = {
  name: string;
  email: string;
  projectType: string;
  details: string;
};

function json(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (request.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    const payload = (await request.json()) as Partial<ProjectMessage>;
    const name = payload.name?.trim();
    const email = payload.email?.trim();
    const projectType = payload.projectType?.trim();
    const details = payload.details?.trim();

    if (
      !name || name.length < 2 || name.length > 120 ||
      !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !projectType || projectType.length > 120 ||
      !details || details.length < 10 || details.length > 10000
    ) {
      return json({ error: "Invalid project details" }, 400);
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

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
        Authorization: `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: Deno.env.get("EMAIL_FROM"),
        to: ["amirmostafakh@gmail.com"],
        reply_to: email,
        subject: `New project inquiry: ${projectType}`,
        text: `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\nProject details:\n${details}`,
      }),
    });
    if (!resendResponse.ok) {
      throw new Error(`Email provider returned ${resendResponse.status}`);
    }

    return json({ success: true });
  } catch (error) {
    console.error("submit-project failed:", error);
    return json({ error: "Unable to submit project brief" }, 500);
  }
});
