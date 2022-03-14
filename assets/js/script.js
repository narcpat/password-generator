// Array of lowercase characters to be included in password
var lowerCaseChar = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCaseChar = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

var selectCharType = function () {
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

  // ask if user wants to use lowercase characters in password
  var lowerConfirm = window.confirm(
    "Would you like to use LOWERCASE characters in your password?"
  );

  if (lowerConfirm) {
    //include lowercase characters
    window.alert("Your password will include LOWERCASE characters");
  } else {
    window.alert("There will be no LOWERCASE characters in your password.");
  }

  // ask if user wants to use uppercase characters in their password
  var upperConfirm = window.confirm(
    "Would you like to use UPPERCASE characters in your password?"
  );

  if (upperConfirm) {
    window.alert("Your password will include UPPERCASE characters");
  } else {
    window.alert("There will be no UPPERCASE characters in your password.");
  }

  var numberConfirm = window.confirm(
    "Would you like to use NUMBERS in your password?"
  );

  if (numberConfirm) {
    window.alert("Your password will include NUMBERS");
  } else {
    window.alert("There will be no NUMBERS in your password.");
  }

  var symbolConfirm = window.confirm(
    "Would you like to use SPECIAL CHARACTERS in your password?"
  );

  if (symbolConfirm) {
    window.alert("Your password will include SPECIAL CHARACTERS");
  }

  if (
    upperConfirm === false &&
    lowerConfirm === false &&
    numberConfirm === false &&
    symbolConfirm === false
  ) {
    alert("You must select at least one character type!");
    return null;
  }

  var optionsSelect = {
    length: promptSelectCharCount,
    lower: lowerConfirm,
    upper: upperConfirm,
    number: numberConfirm,
    symbol: symbolConfirm,
  };
  return optionsSelect;
};

// TODO 4 - when all prompts are answered, a password should be generated. The password can be displayed in an alert or written on the page.
var getRandomChar = function (array) {
  var index = Math.floor(Math.random() * array.length);

  var element = array[index];
  return element;
};

var generatePassword = function () {
  var passwordOptions = selectCharType();
  console.log(passwordOptions);

  var finalPassword = [];

  var charStore = [];

  var chosenChar = [];

  if (!passwordOptions) {
    return null;
  }

  if (passwordOptions.lower) {
    charStore = charStore.concat(lowerCaseChar);
    chosenChar.push(getRandomChar(lowerCaseChar));
  }

  if (passwordOptions.upper) {
    charStore = charStore.concat(upperCaseChar);
    chosenChar.push(getRandomChar(upperCaseChar));
  }

  if (passwordOptions.number) {
    charStore = charStore.concat(numericCharacters);
    chosenChar.push(getRandomChar(numericCharacters));
  }

  if (passwordOptions.symbol) {
    charStore = charStore.concat(specialCharacters);
    chosenChar.push(getRandomChar(specialCharacters));
  }

  for (var i = 0; i < passwordOptions.length; i++) {
    var character = getRandomChar(charStore);
    finalPassword.push(character);
  }

  for (var i = 0; i < chosenChar.length; i++) {
    finalPassword[i] = chosenChar[i];
  }
  return finalPassword.join("");
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
