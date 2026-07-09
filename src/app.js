const splash = document.querySelector("#splash");
const bookingForm = document.querySelector("#bookingForm");
const formStatus = document.querySelector("#formStatus");
const submitFrame = document.querySelector("#bookingSubmitFrame");

document.body.classList.add("splash-active");

window.setTimeout(() => {
  document.body.classList.remove("splash-active");
  document.body.classList.add("splash-complete");
  splash?.setAttribute("aria-hidden", "true");
}, 3000);

bookingForm?.addEventListener("submit", (event) => {
  if (!bookingForm.checkValidity()) {
    event.preventDefault();
    bookingForm.reportValidity();
    return;
  }

  const submitButton = bookingForm.querySelector("button[type='submit']");
  if (!submitButton) {
    return;
  }

  formStatus.textContent = "Sending your request...";
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";
});

submitFrame?.addEventListener("load", () => {
  if (!bookingForm || !formStatus) {
    return;
  }

  const submitButton = bookingForm.querySelector("button[type='submit']");
  if (!submitButton?.disabled) {
    return;
  }

  formStatus.textContent = "Thank you! I will reach you soon.";
  submitButton.textContent = "Request sent";

  window.setTimeout(() => {
    bookingForm.reset();
    submitButton.disabled = false;
    submitButton.textContent = "Submit booking";
    formStatus.textContent = "";
  }, 2400);
});
