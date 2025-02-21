//Random PASSWORD Generator

function generatePassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-=";
  let allChars = "";
  let password = "";
  allChars += includeLowercase ? lowercaseChars : "";
  allChars += includeUppercase ? uppercaseChars : "";
  allChars += includeNumbers ? numberChars : "";
  allChars += includeSymbols ? symbolChars : "";

  if (length <= 0) {
    return `Password length must be greater than 0`;
  }
  if (allChars.length === 0) {
    return `Must select at least one character type`;
  }
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }
  return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
);

let passwordText = document.getElementById("PASSWORD");
passwordText.textContent = password;

function togglePassword() {
  const passwordElement = document.getElementById("PASSWORD");
  if (passwordElement.style.display === "none") {
    passwordElement.style.display = "block";
  } else {
    passwordElement.style.display = "none";
  }
}
