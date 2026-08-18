const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");
const createAccount = document.getElementById("createAccount");


// Login Form

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();


    // Empty fields

    if (email === "" || password === "") {

        message.textContent = "Please enter your email and password.";
        message.style.color = "#e41e3f";

        return;
    }


    // Password validation

    if (password.length < 6) {

        message.textContent =
            "Password must contain at least 6 characters.";

        message.style.color = "#e41e3f";

        return;
    }


    // Demo login

    message.textContent =
        "Demo login successful!";

    message.style.color = "#42b72a";

});


// Create Account Button

createAccount.addEventListener("click", function () {

    message.textContent =
        "Create account feature is available in this demo.";

    message.style.color = "#1877f2";

});