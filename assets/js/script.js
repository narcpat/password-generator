// Alert with password Criteria

// Prompt for password length

// Prompt for characters to be included
// use upper characters?

// use lower characters?

// use numbers?

// use special chararacters?

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
