document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var date = new Date();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let creditCard = document.getElementById("creditCard").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (!name || !email || !phone || !creditCard || !password || !confirmPassword) {
        alert("All fields are required!");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    let phonepattern = /^\d{10}$/;
    if (!phonepattern.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
        return;
    }

    let creditCardpattern = /^\d{16}$/;
    if (!creditCardpattern.test(creditCard)) {
        alert("Credit card number must be exactly 16 digits.");
        return;
    }

    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long, include uppercase, lowercase, number, and special character.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert(`Form submitted successfully on ${date}.`);
});