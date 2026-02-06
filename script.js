// Smooth scroll to contact
function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}


(function () {
  emailjs.init("KBimi8Juakf05_xQ3"); // Public Key
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("status");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    status.innerText = "Sending message...";

    emailjs.sendForm(
      "service_ok51iit",   // Service ID
      "template_okv879d",  // Template ID
      this
    ).then(
      function () {
        status.innerText = "Message sent successfully ✅";
        status.style.color = "green";
        form.reset();
      },
      function (error) {
        status.innerText = "Failed to send message ❌";
        status.style.color = "red";
        console.error("EmailJS Error:", error);
      }
    );
  });
});
