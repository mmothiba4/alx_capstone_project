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
    event.preventDefault(); // Prevent default form submission

    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const errorElement = document.getElementById("error");
    const successElement = document.getElementById("success");

    // Retrieve values from form fields
    const name = nameField.value.trim();
    const email = emailField.value.trim();

    // Reset error and success messages
    errorElement.textContent = "";
    successElement.textContent = "";

    // Validate form fields
    if (name === "" || email === "") {
        errorElement.textContent = "Please fill in all required fields.";
    } else {
        // Form submission successful
        successElement.textContent = "Form submitted successfully!";
        
    }
}

// Add an event listener to the form to handle form submission
document.getElementById("submitForm").addEventListener("submit", handleFormSubmit);

//<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = strip_tags(trim($_POST["message"]));

    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Please fill out all required fields and enter a valid email address.";
        exit;
    }

    $recipient = "mmothiba4@gmail.com";
    $subject = "New Contact Form Submission";
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    $headers = "From: $name <$email>";

    if (mail($recipient, $subject, $email_content, $headers)) {
        http_response_code(200);
        echo "Thank You! Your message has been sent.";
    } else {
        http_response_code(500);
      echo "Oops! Something went wrong and we couldn't send your message.";
}
} else {
http_response_code(403);
echo "There was a problem with your submission, please try again.";
}