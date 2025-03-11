let age = prompt("Enter your age:");

// Convert input to a number
age = Number(age);

if (!isNaN(age)) {
    if (age >= 18) {
        alert("You are eligible to vote.");
    } else {
        alert("You are not eligible to vote.");
    }
} else {
    alert("Please enter a valid number.");
}
