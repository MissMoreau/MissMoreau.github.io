const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Check if form is empty
  const formInputs = form.querySelectorAll(".input");
  const radioInputs = form.querySelectorAll(".radioInput");

  let formEmpty = true;
  formInputs.forEach((input) => {
    console.log(input.value, input.tagName);
    if (input.value !== "") {
      formEmpty = false;
    }
  });

  radioInputs.forEach((input) => {
    console.log(input.checked, input.tagName);
    if (input.checked !== false) {
      formEmpty = false;
    }
  });

  if (formEmpty) {
    alert("You must enter some data to submit this form");
    return;
  }

  // Log form data to console
  else {
    const formData = new FormData(form);
    console.log(
      "======== Form Submission ========",
      "\Full Name: " + document.querySelector("#fullName").value,
      "\nEmail: " + document.querySelector("#email").value,
      "\nMessage: " + document.querySelector("#message").value
    );
    alert("Thank you for your message!")
  }

  // Clear form data
  formInputs.forEach((input) => {
    input.value = "";
  });
});
