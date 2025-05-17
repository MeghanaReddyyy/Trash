// signin.js
document.getElementById('signInBtn').addEventListener('click', function () {
    // Get the username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation to ensure fields are not empty
    if (username !== '' && password !== '') {
        // Redirect to the home page after successful sign-in
        window.location.href = 'home.html'; // Replace with your actual home page URL
    } else {
        // Display an inline error message if fields are empty
        displayErrorMessage('Please enter both username and password.');
    }
});

// Optional: Handle Google sign-in button click
document.getElementById('googleSignInBtn').addEventListener('click', function () {
    // Simulate Google sign-in process
    window.location.href = 'home.html'; // Replace with your actual home page URL or Google authentication flow
});

// Function to display error messages in the DOM
function displayErrorMessage(message) {
    const errorElement = document.createElement('p');
    errorElement.className = 'error-message';
    errorElement.textContent = message;

    // Add the error message to the form container
    const formContainer = document.querySelector('.form-container');
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove(); // Remove previous error message if exists
    }
    formContainer.appendChild(errorElement);
}
