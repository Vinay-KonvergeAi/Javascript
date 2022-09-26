const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(salute) {
    welcomeEl.textContent = salute +" , per Harald 👋"    
}

greetUser("Good Morning")