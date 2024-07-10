// Importing the crypto module
const crypto = require("crypto");

// Getting commands using process.argv
const args = process.argv.slice(2);  // Get arguments excluding 'node' and 'index.js'
const operation = args[0];  // The first argument is the operation

// Function to perform calculation
function calculate(operation, args) {
    let result = 0;
    const num1 = parseFloat(args[1]);
    const num2 = parseFloat(args[2]);

    switch (operation) {
        case 'add':
            if (isNaN(num1) || isNaN(num2)) {
                console.log("Provide valid numbers for addition.");
                return;
            }
            result = num1 + num2;
            break;
        case 'sub':
            if (isNaN(num1) || isNaN(num2)) {
                console.log("Provide valid numbers for subtraction.");
                return;
            }
            result = num1 - num2;
            break;
        case 'mult':
            if (isNaN(num1) || isNaN(num2)) {
                console.log("Provide valid numbers for multiplication.");
                return;
            }
            result = num1 * num2;
            break;
        case 'divide':
            if (isNaN(num1) || isNaN(num2)) {
                console.log("Provide valid numbers for division.");
                return;
            }
            if (num2 === 0) {
                console.log("Cannot divide by zero.");
                return;
            }
            result = num1 / num2;
            break;
        case 'sin':
            if (isNaN(num1)) {
                console.log("Provide a valid number for sine calculation.");
                return;
            }
            result = Math.sin(num1);
            break;
        case 'cos':
            if (isNaN(num1)) {
                console.log("Provide a valid number for cosine calculation.");
                return;
            }
            result = Math.cos(num1);
            break;
        case 'tan':
            if (isNaN(num1)) {
                console.log("Provide a valid number for tangent calculation.");
                return;
            }
            result = Math.tan(num1);
            break;
        case 'random':
            const length = parseInt(args[1]);
            if (isNaN(length) || length <= 0) {
                console.log("Provide a valid length for random number generation.");
                return;
            }
            result = crypto.randomBytes(length).toString('hex');
            break;
        default:
            console.log("Invalid operation");
            return;
    }
    console.log(result);
}

// Call the function with the parsed arguments
calculate(operation, args);
