// Assignment Code
// DOM elements 
const resultEL = document.getElementById('password')
var generateBtn = document.querySelector("#generate");
 

const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

generateBtn.addEventListener("click", () => {
  const length = +prompt("Enter the length of your desired password");
  if (length < 8 || length > 129) {
    alert ('Your password must be at least 8 characters in length and no more than 129.')
    return;
  }
  const hasLower = confirm("Would you like to use lower case letters?");
  const hasUpper = confirm("Would you like to use upper case letters?");
  const hasNumber = confirm("Would you like to use numbers?");
  const hasSymbol = confirm("Would you like to use symbols?");

  resultEL.innerText = generatePassword(hasLower, hasUpper, hasNumber, 
  hasSymbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";

  const typesCount = lower + upper + number +symbol;

  //console.log('types count', typesCount);

  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

  //console.log('types array', typesArr);

  if (typesCount === 0) {
    return 'You must select at least one category';
  }

  for(let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];

      //console.log(funcName)

      generatedPassword += randomFunction[funcName]();
    })
   
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;

}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = '!@#$%^&*()_+=-{}';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

//Below here is all code that didn't work, thought I'd leave it in to show my work :)
  /*
  var incUpper = confirm("Include Uppercase Letters?");
  if (incUpper == true) {
    console.log(characters += upperCase);
  }
  var incLower = prompt("Include Lowercase Letters? Y or N");
  var incNum = prompt ("Include Numbers? Y or N");
  var incSpec = prompt("Include Special Characaters? Y or N");
  let characters = "";
  
  incUpper.checked ? (characters += upperCase) : "";
  incLower.checked ? (characters += lowerCase) : "";
  incNum.checked ? (characters += number) : "";
  incSpec.checked ? (characters += special) : "";
  passwordText.value = generatePassword(length.value, characters);
})

/*var incUpper = confirm("Include Uppercase Letters?");
if (incUpper == true) {
  console.log(characters += upperCase);
}
var criteria = prompt("Include Uppercase Letters?"); */

// Write password to the #password input

/*
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = '!@#$%^&*()_+=-{}';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(getRandomSymbol());


const passwordText = document.getElementById("password");
const length = document.getElementById("length");
var incUpper = document.getElementById("upper");
const incLower = document.getElementById("lower");
const incNum = document.getElementById("num");
const incSpec = document.getElementById("spec");


var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var spec = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"]
lowerCase = lower[Math.floor(Math.random() * lower.length)]
upperCase = upper[Math.floor(Math.random() * upper.length)]
number = num[Math.floor(Math.random() * num.length)]
special = spec[Math.floor(Math.random() * spec.length)]

// Add event listener to generate button
generateBtn.addEventListener("click", (writePassword) => {
  var incUpper = confirm("Include Uppercase Letters?");
  if (incUpper == true) {
    console.log(characters += upperCase);
  }
  var incLower = prompt("Include Lowercase Letters? Y or N");
  var incNum = prompt ("Include Numbers? Y or N");
  var incSpec = prompt("Include Special Characaters? Y or N");
  let characters = "";
  
  incUpper.checked ? (characters += upperCase) : "";
  incLower.checked ? (characters += lowerCase) : "";
  incNum.checked ? (characters += number) : "";
  incSpec.checked ? (characters += special) : "";
  passwordText.value = generatePassword(length.value, characters);
});

const generatePassword = (length, characters) => {
  let password
} */