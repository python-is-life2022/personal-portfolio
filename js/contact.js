const projectContactForm = document.getElementById("projectContactForm");
const formStatus = document.querySelector(".form-status");

const SUPABASE_FUNCTION_URL = "https://vxueupjqhteroleeolpr.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_a8yL-ekvS-ReGC3k7tUlnw_Wo6ZL9ad";

if (projectContactForm) {
  projectContactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(projectContactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const projectType = String(formData.get("projectType") || "").trim();
    const details = String(formData.get("details") || "").trim();

    if (!SUPABASE_FUNCTION_URL || !SUPABASE_ANON_KEY) {
      showStatus("Form service is not configured yet. Please try again later.", true);
      return;
    }

    const submitButton = projectContactForm.querySelector(".form-submit");
    submitButton.disabled = true;
    showStatus("Sending your project brief…");

    try {
      const response = await fetch(SUPABASE_FUNCTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ name, email, projectType, details }),
      });

      if (!response.ok) {
        throw new Error(`Submission failed with status ${response.status}`);
      }

      projectContactForm.reset();
      showStatus("Your message was sent successfully. Thank you!");
    } catch (error) {
      console.error("Project brief submission failed:", error);
      showStatus("We could not send your message. Please try again.", true);
    } finally {
      submitButton.disabled = false;
    }
  });
}

function showStatus(message, isError = false) {
  if (!formStatus) return;
  formStatus.textContent = message;
  formStatus.classList.toggle("error", isError);
}
