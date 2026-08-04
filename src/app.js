import { inject } from "@vercel/analytics";

// Initialize Vercel Analytics
inject();

document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");
  const bookingForm = document.getElementById("bookingForm");
  const formStatus = document.getElementById("formStatus");
  const submitFrame = document.getElementById("bookingSubmitFrame");

  // Show splash
  document.body.classList.add("splash-active");

  // Hide splash after 3 seconds
  setTimeout(() => {
    document.body.classList.remove("splash-active");
    document.body.classList.add("splash-complete");

    if (splash) {
      splash.style.opacity = "0";
      splash.style.visibility = "hidden";
      splash.style.pointerEvents = "none";
    }
  }, 3000);

  // Booking form
  if (bookingForm) {
    bookingForm.addEventListener("submit", (event) => {
      if (!bookingForm.checkValidity()) {
        event.preventDefault();
        bookingForm.reportValidity();
        return;
      }

      const submitButton = bookingForm.querySelector(
        "button[type='submit']"
      );

      formStatus.textContent = "Sending your request...";
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    });
  }

  // Form success
  if (submitFrame) {
    submitFrame.addEventListener("load", () => {
      if (!bookingForm) return;

      const submitButton = bookingForm.querySelector(
        "button[type='submit']"
      );

      if (!submitButton.disabled) return;

      formStatus.textContent = "Thank you! I will reach you soon.";
      submitButton.textContent = "Request Sent";

      setTimeout(() => {
        bookingForm.reset();
        submitButton.disabled = false;
        submitButton.textContent = "Submit booking";
        formStatus.textContent = "";
      }, 2500);
    });
  }
});