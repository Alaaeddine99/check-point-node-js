// Require the generate-password package
const generatePassword = require('generate-password');

// Create a function to generate a random password and log it to the console
function generateRandomPassword() {
    // Use generatePassword.generate to create a new password with specific options
    const password = generatePassword.generate({
        length: 12, // Length of the password
        numbers: true, // Include numbers
        symbols: true, // Include symbols
        uppercase: true, // Include uppercase letters
        lowercase: true // Include lowercase letters
    });

    // Log the generated password to the console
    console.log('Generated Password:', password);
}

// Call the function to generate and log the password
generateRandomPassword();
