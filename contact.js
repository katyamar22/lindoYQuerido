
function formValidation(event) {
    // Prevent the form from submitting by default
    event.preventDefault();

    console.log("Form validation function called.");

    // DOM of form inputs
    const name = document.getElementById('user-name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('user-message').value;

    // DOM of error messages
    const nameError = document.getElementById('name-error');
    const phoneError = document.getElementById('phone-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    nameError.textContent = "";
    phoneError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let isValid = true;

    if (name === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (phone === "") {
        phoneError.textContent = "Please enter your phone number.";
        isValid = false;
    }
    if (message === "") {
        messageError.textContent = "Please tell us why you are contacting us.";
        isValid = false;
    }

    return isValid;
}

// Get the form element
const form = document.getElementById('contact-form');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    console.log("Form submitted.");
    if (!formValidation(event)) {
        // If form validation fails, do not submit the form
        event.preventDefault();
        console.log("Form validation failed. Submission prevented.");
    } else {
        console.log("Form validation passed. Submitting form.");
    }
});