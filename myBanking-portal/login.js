// let showUserName = document.getElementById("userName")
// let showUserEmail = document.getElementById("userEmail")


// Getting data from the login form and validating
let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = e.target.email.value.toLowerCase();
  let password = e.target.password.value;

  let userData = JSON.parse(localStorage.getItem("userDetails")) || [];
  let checkStatus = false;

  // Check if the entered email and password match any existing user
  for (let val of userData) {
    if (val.EmailId === email && val.Password === password) {
      checkStatus = true;
      break;
    }
  }
  if (checkStatus) {
    alert("Login successful");
    // Redirect to the dashboard.html page after successful login
    localStorage.setItem("loggedInEmail", email);
    
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid email or password. Please try again.");
  }
});