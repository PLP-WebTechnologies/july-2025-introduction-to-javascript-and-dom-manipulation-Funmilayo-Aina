// script.js
//Variable declarations and conditionals (Part 1)
// You will verify and welcome users based on their login status, age, and location.

let userName = prompt("Enter your name:");
let Location = prompt("Enter your Country:");
let userAge = parseInt(prompt("Enter your age:"));

// Grant access based on login status

if (isLoggedIn === true) {
        console.log("Welcome back, " + userName + "!");
        let accessLevel = "member";}
 else {
        console.log("Hello, " + userName + "! Please log in to access member features.");
        let accessLevel = "guest";} 
if (userAge < 18) {
        console.log("You are a minor.");
//At least 2 custom functions (Part 2)
function greetUser(userName) {
    return "Welcome to FhamaDeli, $ {userName) !  We are the number for all your AI in Agriculture needs!";
}
// Allow user to see the estimnated delivery time of the product the farmer wants to sell
// Estimated delivery time function
function estimateDeliveryTime(method) {
    if (method === "standard") {
        return "Your estimated delivery time is 5-7 business days.";
    } else if (method === "express") {
        return "Your estimated delivery time is 2-3 business days.";
    } else if (method === "overnight") {
        return "Your estimated delivery time is 1 business day.";
    } else {
        return "Invalid delivery method selected.";
    }
}
//At least 2 loop examples (Part 3)
// This functions will be called when called shows available serc]vices and payment methods


let services = ["AI Crop Monitoring", "Automated Irrigation Systems", "Soil Health Analysis", "Pest Detection"];
for (let i = 0; i < services.length; i++) 
    {
    console.log("Service " + (i + 1) + ": " + services[i]);
}   

let paymentMethods = ["Credit Card", "PayPal", "Bank Transfer"];
for (let method of paymentMethods) {
    console.log("Available payment method: " + method);
}

//At least 3 DOM interactions (Part 4)

// DOM manipulation to greet user
let grtUser = document.createElement("Welcome to FhamaDeli  ");
grtUser.innerText = "Welcome to FhamaDeli, " + userName + "! We are the number one for all your AI in Agriculture needs!";

// DOM manipulation for delivery estimate
let deliverySelector = document.querySelector("#deliveryMethod");
let deliveryMsg = document.createElement("p");
deliveryMsg.style.fontWeight = "bold";
deliveryMsg.style.marginTop = "10px";
deliveryMsg.style.textAlign = "center";
deliveryMsg.style.color = "green";

deliverySelector.addEventListener("change", function() {
    let method = deliverySelector.value;
    deliveryMsg.innerText = estimateDeliveryTime(method);
})};
