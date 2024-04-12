const codeBox = document.getElementById("code");
const length = "6";
const button = document.getElementById("btn-2");
const image = document.querySelector("img");


function createCode(){
    let code = "";
    const otp = Math.floor(Math.random() * Math.pow(10, length));
    code += otp

    codeBox.value = code
}

function copyPassword() {
    const codeBox = document.getElementById("code"); // Assuming the password field has this ID
    if (!codeBox) return; // Handle potential errors if element not found
  
    codeBox.select();
  
    try {
      navigator.clipboard.writeText(codeBox.value);
    } catch (err) {
      console.error("Failed to copy code:", err);
      // Handle potential errors here, like informing the user copying failed.
    }
  }

button.addEventListener("click", createCode);
image.addEventListener("click", copyPassword);