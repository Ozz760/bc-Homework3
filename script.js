 // Add an array of multipe stings of the alphabet, intengers, and symbols for the generator can make a randomized password. 
 var key_strings = {
 lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
 uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
 numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
 symbols: [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ":", ">", "?", "@", "[", "\\", "]", "^", "_", "\`", "{", "|", "}", "~", "\'", "\""],

 }


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add a function with if and else statemets for the user can go throught selected option to make a password. 
function generatePassword() {
  var password = "password";
  // TODO: add code to generate the password here
  var length = window.prompt("Enter a number from 8 to 128 for password length.");

  var lowercase = window.confirm("Would you like to use lowercase letters?");
  if (lowercase) {
    generateBtn += key_strings.lowercase;
  };

  var uppercase = window.confirm("Would you like to use uppercase letters?");
  if (uppercase) {
    generateBtn += key_strings.uppercase;
  };

  var symbols = window.confirm("Would you like to use symbols?");
  if (symbols) {
    generateBtn += key_strings.symbol;
  };

  var numbers = window.confirm("Would you like to use numbers?");
  if (numbers) {
    generateBtn += key_strings.number;
  };
  var password = "";
  for (let i = 0; i < key_strings.length; i++) {
    password += key_strings[Math.floor(Math.random() * generateBtn.length)]
  }
  return password;
}
// After these steps I was not able to make the generator to output any password yet. I could not find what was going on with the code. 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






