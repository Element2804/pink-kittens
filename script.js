// Assignment code here
var specialChar = ["@", "%", "+", "/", "'", "!", "#", "$", "^", "?", ":", ",", ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function generatePassword(){
    console.log("button test passed");
   var selectPass = prompt("select the length of your password");
   console.log(window)
  // if (selectPass < 8 || > 128)

//prompt the user for the password criteria
// a.password length between 8-128 
//  b.lowercase, uppercase, numbers, special characters
// validate the input
//generate password based on criteria


// Display password
    return "Password here"
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
generateBtn.addEventListener("click", writePassword);