const submitButton = document.querySelector("#email-submit");
const dismissButton = document.querySelector(".dismiss-msg");
const emailInput = document.querySelector('input[type="email"]');
const invalidEmailElements = document.getElementsByClassName("invalid-email");
const centerContainer = document.querySelector(".center-container");
const confirmationContainer = document.querySelector(".confirmation-container");

function emailValidation() {
  const emailAddress = emailInput.value;
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const isValidEmail = emailAddress.match(validRegex);

  // Iterate over invalidEmailElements once to set display property
  Array.from(invalidEmailElements).forEach((element) => {
    element.style.display = isValidEmail ? "none" : "block";
  });

  // Set borderColor and backgroundColor based on isValidEmail
  emailInput.style.borderColor = isValidEmail ? "#ccc" : "var(--Tomato)";
  emailInput.style.backgroundColor = isValidEmail
    ? "var(--White)"
    : "var(--Tomato-bg)";

  if (isValidEmail) {
    centerContainer.style.display = "none";
    confirmationContainer.style.display = "initial";
  }
}

function dismissConfirmation() {
  centerContainer.style.display = "flex";
  confirmationContainer.style.display = "none";
}

submitButton.addEventListener("click", () => {
  emailValidation();
});

dismissButton.addEventListener("click", () => {
  dismissConfirmation();
});
