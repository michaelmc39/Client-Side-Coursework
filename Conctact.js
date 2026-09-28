// Gets the inputs from the form
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
    // Lists any errors in an array and prevents the form from submitting
    let errors = [];
    e.preventDefault();
    
    // Checks if name is empty
    if (name.value === "" || name.value == null) {
        name.placeholder = "Name is required";
        errors.push("Name is required");
    } else {
        name.placeholder = "Enter Your Name";
    }
    
    // Checks if email is empty
    if (email.value === "" || email.value == null) {
        email.placeholder = "Email is required";
        errors.push("Email is required");
    } else {
        email.placeholder = "Enter Your Email";
    }

    // Checks if phone is empty
    if (phone.value === "" || phone.value == null) {
        phone.placeholder = "Phone is required";
        errors.push("Phone is required");
    } else {
        phone.placeholder = "Enter Your Phone";
    }
    
    // Checks if message is empty
    if (message.value === "" || message.value == null) {
        message.placeholder = "Message is required";
        errors.push("Message is required");
    } else {
        message.placeholder = "Your Message";
    }
    
    // If there are no errors the form will submit
    if (errors.length === 0) {
        form.submit();
    }

});

       // ── Mobile hamburger toggle ──────────────────────────────────────
var menuToggle = document.getElementById("menuToggle");
var navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.onclick = function () {
        navLinks.classList.toggle("open");
    };
}