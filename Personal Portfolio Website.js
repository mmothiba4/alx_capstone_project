#!/usr/bin/node
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "website-navigation") {
      x.className += " responsive";
    } else {
      x.className = "website-navigation";
    }
  }

//Requirement validation check
const username = document.getElementById("username").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

  document.getElementById("submit").addEventListener('click', 
    function(event) {
        //handle form data
        event.preventDefault();
        //Check if the username is empty
        if (username == null || username.value == undefined || username ==""){
            alert("username is required")
        }

        if (message.value == null || message.value == undefined || message.value ==""){
            alert("message field is required")
        }
    });

    // Function to validate the email

    function validateEmail() {
        const email = document.getElementById("email").value;
        const errorElement = document.getElementById("error");    
        const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

        // Check if the email matches the regex pattern
        if (!emailRegex.test(email)) {
            errorElement.textContent = "Please enter a valid email address.";
            return false;
        }
        // Clear any previous error messages and allow form submission
        errorElement.textContent = "";
        return true;
}
// Add an event listener to the form to call validateEmail on submit
document.getElementById("emailForm").addEventListener("submit", function (event) {
    if (!validateEmail()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

// Function to handle form submission and perform validation
function handleFormSubmit(event) {
    event.preventDefault();
}