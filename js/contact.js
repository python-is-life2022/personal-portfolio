const projectContactForm = document.getElementById("projectContactForm");
const formStatus = document.querySelector(".form-status");
const SUPABASE_FUNCTION_URL =
  "https://vxueupjqhteroleeolpr.supabase.co/functions/v1/submit-project";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_a8yL-ekvS-ReGC3k7tUlnw_Wo6ZL9ad";
const turnstileSiteKey = document.querySelector('meta[name="turnstile-site-key"]')?.content.trim();
let turnstileWidgetId;

if (projectContactForm) {
  const submitButton = projectContactForm.querySelector(".form-submit");
  const turnstileContainer = document.getElementById("turnstileWidget");

  if (!turnstileSiteKey || turnstileSiteKey === "REPLACE_WITH_TURNSTILE_SITE_KEY") {
    showStatus("The secure form is not configured yet. Please contact me by email.", true);
  } else if (!window.turnstile) {
    showStatus("Security verification could not load. Please reload and try again.", true);
  } else if (turnstileContainer) {
    turnstileWidgetId = window.turnstile.render(turnstileContainer, {
      sitekey: turnstileSiteKey,
      action: "project_inquiry",
      theme: "dark",
      "error-callback": () => showStatus("Security verification failed to load. Please try again.", true),
      "expired-callback": () => showStatus("Security verification expired. Please complete it again.", true),
    });
  }

  projectContactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (turnstileWidgetId === undefined || !window.turnstile) {
      showStatus("Security verification is unavailable. Please reload and try again.", true);
      return;
    }

    const formData = new FormData(projectContactForm);
    const turnstileToken = String(formData.get("cf-turnstile-response") || "");
    if (!turnstileToken) {
      showStatus("Please complete the security check before sending.", true);
      return;
    }

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const projectType = String(formData.get("projectType") || "").trim();
    const details = String(formData.get("details") || "").trim();
    const website = String(formData.get("website") || "").trim();

    submitButton.disabled = true;
    showStatus("Sending your project brief…");

    try {
      const response = await fetch(SUPABASE_FUNCTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_PUBLISHABLE_KEY,
        },
        body: JSON.stringify({ name, email, projectType, details, website, turnstileToken }),
      });

      if (response.status === 429) {
        showStatus("Too many submissions. Please wait before trying again.", true);
        return;
      }
      if (!response.ok) throw new Error(`Submission failed with status ${response.status}`);

      projectContactForm.reset();
      showStatus("Your message was sent successfully. Thank you!");
    } catch (error) {
      console.error("Project brief submission failed:", error);
      showStatus("We could not send your message. Please try again.", true);
    } finally {
      submitButton.disabled = false;
      window.turnstile.reset(turnstileWidgetId);
    }
  });
}

function showStatus(message, isError = false) {
  if (!formStatus) return;
  formStatus.textContent = message;
  formStatus.classList.toggle("error", isError);
}
