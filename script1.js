const passwordBox = document.getElementById("password");
const length = 12;
const button = document.getElementById("btn-2");
const image = document.querySelector("img");


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChar = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    passwordBox.value = password;
}


function copyPassword() {
    const passwordBox = document.getElementById("password"); // Assuming the password field has this ID
    if (!passwordBox) return; // Handle potential errors if element not found
  
    passwordBox.select();
  
    try {
      navigator.clipboard.writeText(passwordBox.value);
    } catch (err) {
      console.error("Failed to copy password:", err);
      // Handle potential errors here, like informing the user copying failed.
    }
  }
  
image.addEventListener("click", copyPassword);
button.addEventListener("click", createPassword);
