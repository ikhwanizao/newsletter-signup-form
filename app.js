const submitButton = document.querySelector("#email-submit");
const emailInput = document.querySelector('input[type="email"]');
const invalidEmailElements = document.getElementsByClassName("invalid-email");

submitButton.addEventListener("click", () => {
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
  emailInput.style.backgroundColor = isValidEmail ? "var(--White)" : "var(--Tomato-bg)";
});
