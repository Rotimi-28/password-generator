

   
// Assignment code here
function generatePassword() {

let passwordLength = prompt('How many characters do you want in your password?')
if (passwordLength < 8 || passwordLength > 128) {
  alert('please you must choose character from 8 - 128')
  return;
}
 let includeLowerCase = confirm('do you want to include lowercase')
 let includeUpperCase = confirm('do you want to include upercase')
 let includeNumber = confirm('do you want to inculde number')
 let includeSymbol = confirm('do you want to include symbol')

  let password = '';
 //password =  gepatRandomUpper() + getRandomLower() + getRandomNumber() + getRandomSymbol()
  for (let i = 0; i < passwordLength; i ++) {
    // password += getRandomUpper() + getRandomLower() + getRandomNumber() + getRandomSymbol()
    if (includeLowerCase === true) {
      password += getRandomLower()
      
    }
    if (includeUpperCase === true) {
      password += getRandomUpper()
    }
    if (includeNumber === true) {
      password += getRandomNumber()
    }
    if (includeSymbol === true) {
      password += getRandomSymbol()
    }
  }
  return password.substring(0, passwordLength) 
}
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols ='!@#$%&*(){}[]+<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
let button = document.getElementById('btn')
generateBtn.addEventListener("click", writePassword);
