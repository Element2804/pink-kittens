// Assignment code here
var userChoice = [];
var passwordLength = 8;
var specialChar = ["@", "%", "+", "/", "'", "!", "#", "$", "^", "?", ":", ",", ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function generatePassword(){
    console.log("button test passed");
   var selectPass = prompt("select the length of your password");
   console.log(window)


//prompt the user for the password criteria
// a.password length between 8-128 
//  b.lowercase, uppercase, numbers, special characters
// validate the input
//generate password based on criteria


// Display password
    return "Password here"
}

// Function containing the password prompts
function passPrompt () {
passwordLength = [];

passwordLength = parseInt(prompt("Please select a number between 8 - 128"));

    if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert("Your password must be betwen 8 - 128 characters. Please try again");
    return false;    
    }

    if(confirm("Would you like to add special characters?")) {
        userChoice = userChoice.concat(specialChar);
    }
    
    if(confirm("Would you like to add numbers?")) {
        userChoice = userChoice.concat(numbers);
    }

    if(confirm("Would you like to add lower case letters?")) {
        userChoice = userChoice.concat(lowerCase);
    }

    if(confirm("Would you like to add upper case letters?")) {
        userChoice = userChoice.concat(upperCase);
    }
    return true;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    passPrompt();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);