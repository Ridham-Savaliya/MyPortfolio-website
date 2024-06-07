let a = document.getElementById("submit");
let name =document.getElementById("name");
let email =document.getElementById("email");
let companyname =document.getElementById("company-name");
let objective =document.getElementById("objective");

// Check if the button element exists
if (a) {
    // Add the event listener to the button
  
        a.addEventListener("click", () => {
            alert("ewfew")
        });
    }
    window.addEventListener('click', function () {
    
        var audio = document.getElementById("#audio");
        audio.play();
    })

// // Function to display the message
function displymsg() {
    alert("Response Submitted!");


            // Clear the input fields
            document.getElementById("name").value = '';
            document.getElementById("email").value = '';
            document.getElementById("company-name").value = '';
            document.getElementById("objective").value = '';
}