const projectContactForm = document.getElementById("projectContactForm");

if (projectContactForm) {
  projectContactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(projectContactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const projectType = String(formData.get("projectType") || "").trim();
    const details = String(formData.get("details") || "").trim();

    const subject = `New project inquiry: ${projectType}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Project type: ${projectType}`,
      "",
      "Project details:",
      details,
    ].join("\n");

    window.location.href =
      `mailto:amirmostafakh@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
