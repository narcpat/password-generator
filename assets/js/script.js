var randomizePassword = {
  lower: getRandomLowerCaseChar,
  upper: getRandomUpperCaseChar,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

// Generate characters and numbers for password:
// Generate random Lower case letter
var getRandomLowerCaseChar = function () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

// Generate random Upper case letter
var getRandomUpperCaseChar = function () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

// Generate random number
var getRandomNumber = function () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

// Generate random symbols
var getRandomSymbol = function () {
  var symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

var selectCharCount = function () {
  // ask how long the password should be
  var promptSelectCharCount = window.prompt(
    "Please select how long you want your password to be! It must be between 8 and 128 characters/numbers long."
  );

  // if player leaves field blank, or enters numbers outside of 8-128, they will be asked to enter an acceptable value.
  if (
    promptSelectCharCount === "" ||
    promptSelectCharCount === null ||
    promptSelectCharCount < 8 ||
    promptSelectCharCount > 128
  ) {
    window.alert(
      "You must select a number between 8 and 128. Please try again!"
    );
    return promptSelectCharCount();
  }
  selectLower();
};

//TODO 3: a set of prompts asking what character types to include or not include: lowercase, uppercase, numeric and/or special characters (4 prompts total); responses should be validated with at least one character type selected.

// var selectCharType = fuction () {

// };

var selectLower = function () {
  // ask if user wants to use lowercase characters in password
  var lowerConfirm = window.confirm(
    "Would you like to use LOWERCASE characters in your password?"
  );

  if (lowerConfirm) {
    //include lowercase characters
    window.alert("Your password will include LOWERCASE characters");
    return selectUpper();
  } else {
    window.alert("There will be no LOWERCASE characters in your password.");
  }
  selectUpper();
};

var selectUpper = function () {
  // ask if user wants to use uppercase characters in their password
  var upperConfirm = window.confirm(
    "Would you like to use UPPERCASE characters in your password?"
  );

  if (upperConfirm) {
    window.alert("Your password will include UPPERCASE characters");
    return selectNumber();
  } else {
    window.alert("There will be no UPPERCASE characters in your password.");
  }
  selectNumber();
  console.log(upperConfirm);
};

var selectNumber = function () {
  var numberConfirm = window.confirm(
    "Would you like to use NUMBERS in your password?"
  );

  if (numberConfirm) {
    window.alert("Your password will include NUMBERS");
    return selectSymbol();
  } else {
    window.alert("There will be no NUMBERS in your password.");
  }
  selectSymbol();
};

var selectSymbol = function () {
  var symbolConfirm = window.confirm(
    "Would you like to use SPECIAL CHARACTERS in your password?"
  );

  if (symbolConfirm) {
    window.alert("Your password will include SPECIAL CHARACTERS");
    return generatePassword();
  } else {
    window.alert("There will be no SPECIAL CHARACTERS in your password.");
  }
  generatePassword();
};

// TODO 4 - when all prompts are answered, a password should be generated. The password can be displayed in an alert or written on the page.

var generatePassword = function (lower, upper, number, symbol, legnth) {
  // get length of password

  var passwordLength = selectCharCount();

  var generatedPassword = "";

  var typesCount = lower + upper + number + symbol;
  console.log("typesCount: ", typesCount);

  var typesArray = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  console.log("typesArray ", typesArray);
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
