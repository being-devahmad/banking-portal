// ------> portion 1
// Function to display the logged-in user's name in the sidebar
function displayUserName() {
  let loggedInEmail = localStorage.getItem("loggedInEmail");
  let userData = JSON.parse(localStorage.getItem("userDetails")) || [];

  for (let val of userData) {
    if (val.EmailId === loggedInEmail) {
      let fullName = val.first_Name + " " + val.last_Name;
      let showUserName = document.getElementById("userName");
      let showUserEmail = document.getElementById("userEmail");
      if (showUserName) {
        showUserName.innerHTML = `<h5 class="fw-700 mb-0">${fullName}</h5>`;
      }
      if (showUserEmail) {
        showUserEmail.innerHTML = `<p id="userEmail" class="fw-700 mb-0">${loggedInEmail}</p>`;
      }
      break;
    }
  }
}
// Call the displayUserName function to show the user's name when the dashboard loads
window.addEventListener("load", () => {
  displayUserName();
});

// ------> portion 2
//   logout
let logout = () => {
  localStorage.removeItem("loggedInEmail");
  window.location.href = "login-form.html";
};

// ------> portion 3
// deposit ammount
let depositCash = () => {
  let depositAmount = parseInt(document.getElementById("cashInInput").value);
  //we'll retrieve that email from localstorage we're currently using
  let loggedInEmail = localStorage.getItem("loggedInEmail");
  let userData = JSON.parse(localStorage.getItem("userDetails")) || [];

  // loop in which we check balance
  for (let val of userData) {
    if (val.EmailId === loggedInEmail) {
      val.balance = (val.balance || 0) + depositAmount;
      localStorage.setItem("userDetails", JSON.stringify(userData));

      //passing balance to update function
      updateBalance(val.balance);
      break;
    }
  }
};
// updating cash on dashboard by taking value from the prev fun
function updateBalance(balance) {
  let userBalance = document.getElementById("userBalance");
  if (userBalance) {
    userBalance.textContent = balance;
  }
}

// ------> portion 4
// withdraw cash
let withdrawCash = () => {
  let withdrawAmount = parseInt(document.getElementById("cashOutInput").value);
  let loggedInEmail = localStorage.getItem("loggedInEmail");

  let userData = JSON.parse(localStorage.getItem("userDetails")) || [];
  for (let val of userData) {
    if (val.EmailId === loggedInEmail) {
      if (val.balance >= withdrawAmount) {
        val.balance -= withdrawAmount;
        localStorage.setItem("userDetails", JSON.stringify(userData));

        updateBalance(val.balance);
        
      } else {
        alert("Insufficient balance");
      }
      break;
    }
  }
};

// ------> portion 5
// now i want is that the balance displayed in my dashboard should not 0 on refreshing the page
(function () {
  // Retrieve the user's balance from localStorage
  let loggedInEmail = localStorage.getItem("loggedInEmail");
  let userData = JSON.parse(localStorage.getItem("userDetails")) || [];
  let balance = 0;

  for (let val of userData) {
    if (val.EmailId === loggedInEmail) {
      balance = val.balance || 0;
      break;
    }
  }

  // Update the balance display on the page
  updateBalance(balance);
})();


