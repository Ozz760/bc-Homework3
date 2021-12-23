var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specials = [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "\`", "{", "|", "}", "~", "\'", "\""];
var allowedChars = [];
var pwLength = 0;



// Assignment Code
var generateBtn = document.querySelector("#generate");

const key_strings = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

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
  for (let i = 0; i < length; i++) {
    password += key_strings[Math.floor(Math.random() * generateBtn.length)]
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





//function generatePassword() {
  //var passwordCharSet = "";

 // var length = window.prompt("Enter a number from 8 to 128 for password length.");

 // var lowercase = window.confirm("Would you like to use lowercase letters?");
  //if (lowercase) {
  //  passwordCharSet += key_strings.lowercase;
  //};

 // var uppercase = window.confirm("Would you like to use uppercase letters?");
  //if (uppercase) {
   // passwordCharSet += key_strings.uppercase;
  //};

  //var symbols = window.confirm("Would you like to use symbols?");
  //if (symbols) {
    //passwordCharSet += key_strings.symbol;
  //};

  //var numbers = window.confirm("Would you like to use numbers?");
  //if (numbers) {
    //passwordCharSet += key_strings.number;
  //};
  //var password = "";
  //for (let i = 0; i < length; i++) {
    //password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  //}
  //return password;
//}

//console.log(generatePassword());
