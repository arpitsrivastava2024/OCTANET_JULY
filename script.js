let image = document.getElementById('image');
let images = ['Img/banner/banner1.avif','Img/banner/banner2.webp','Img/banner/banner3.webp','Img/banner/banner4.webp','Img/banner/banner5.webp','Img/banner/banner6.webp','Img/banner/banner7.webp']
setInterval(function(){
    let random = Math.floor(Math.random() * 3);
    image.src = images[random]
},2000);


getElementById("loginform") [button] 
    console.log("Form Submitted");
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let cpassword = document.getElementById("cpassword").value;
let phone = document.getElementById("phone").value;
let address = document.getElementById("address").value;

// script.js

// You can add JavaScript code here for dynamic functionality, such as form submission or data validation. 

// Example: Form submission
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get form data (e.g., mobile number)
    const mobileNumber = document.querySelector('.mobile-input').value;

    // Perform form submission logic (e.g., send data to server)
    console.log(`Mobile number: ${mobileNumber}`); // Log mobile number to the console
});

// Play Button Functionality
const playButtons = document.querySelectorAll('.play-button');

playButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Replace with your video embed code or functionality
    alert('Play button clicked! You can add your video embed here.');
  });
});

// script.js
const startNowButton = document.getElementById('start-now');
const mobileNumberInput = document.getElementById('mobile-number');

startNowButton.addEventListener('click', () => {
    // Perform validation on the mobile number
    // ...

    // Redirect to the next page based on the validation
    // ...
});

// Additional JavaScript for other functionalities can be added here

// script.js

const loginForm = document.getElementById('loginForm');
const mobileNumberInput = document.getElementById('mobileNumber');
const otpInput = document.getElementById('otp');
addEventListener("click", redirect)
function redirect(){
    window.location = "main.html";
  }
const skipButton = document.getElementById('skip');
const loginButton = document.getElementById('login');
const googleLoginButton = document.getElementById('googleLogin');
const searchInput = document.getElementById('search');
const engButton = document.getElementById('eng');
const inButton = document.getElementById('in');

// MySQL database connection
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'apnadealer'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');
});

// Login with OTP
loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const mobileNumber = mobileNumberInput.value;
    const otp = otpInput.value;
    // Validate OTP and mobile number
    if (mobileNumber && otp) {
        const query = `SELECT * FROM users WHERE mobile_number = ?`;
        db.query(query, [mobileNumber], (err, results) => {
            if (err) {
                console.error('Error querying database:', err);
                return;
            }
            if (results.length > 0) {
                // User exists, verify OTP
                const user = results[0];
                if (user.otp === otp) {
                    // OTP is correct, login user
                    console.log('Login successful');
                } else {
                    console.log('Invalid OTP');
                }
            } else {
                console.log('User not found');
            }
        });
    } else {
        console.log('Please enter mobile number and OTP');
    }
});

// Google Login
googleLoginButton.addEventListener('click', (e) => {
    e.preventDefault();
    // Google login implementation
    console.log('Google login clicked');
});

// Search
searchInput.addEventListener('input', (e) => {
    const searchQuery = searchInput.value;
    // Search implementation
    console.log(`Searching for ${searchQuery}`);
});

// Language switcher
engButton.addEventListener('click', (e) => {
    e.preventDefault();
    // Switch to English language
    console.log('English language selected');
});

inButton.addEventListener('click', (e) => {
    e.preventDefault();
    // Switch to Hindi language
    console.log('Hindi language selected');
});
