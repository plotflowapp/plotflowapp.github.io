const form = document.getElementById("updates-form");
const message = document.getElementById("form-message");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email");
    const consent = document.getElementById("consent");

    if (!email.value.trim() || !email.validity.valid) {
      message.textContent = "Please enter a valid email address.";
      message.style.color = "#ff9b9b";
      email.focus();
      return;
    }

    if (!consent.checked) {
      message.textContent = "Please check the box if you'd like to receive new tool notifications.";
      message.style.color = "#ffcf79";
      consent.focus();
      return;
    }

    // PLACEHOLDER:
    // Connect this form to Brevo after creating the account and GDPR/Double Opt-In form.
    message.textContent = "The email form is ready to connect to Brevo.";
    message.style.color = "#79e6b0";
  });
}

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuButton) {
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    document.querySelector(".nav-links")?.classList.toggle("mobile-open", !open);
  });
}
