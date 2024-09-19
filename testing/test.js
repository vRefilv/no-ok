// Define a function to handle the login command
function simulateLogin() {
    console.log('> enter password:');
    
    // Prompt the user for a password
    setTimeout(() => {
        const password = prompt('Password:');
        handlePassword(password);
    }, 100);
}

// Define a function to handle password input
function handlePassword(inputPassword) {
    const correctPassword = 'Refil';
    
    if (inputPassword === correctPassword) {
        console.log('Easter Egg 2: Congratulations, you found the easter egg!');
    } else {
        console.log('Incorrect password.');
    }
}
