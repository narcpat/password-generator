var randomizePassword = {
  lower: getRandomLowerCaseChar,
  upper: getRandomUpperCaseChar,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

// Generate random lower case letter
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

console.log(getRandomSymbol());

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
