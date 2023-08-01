let regForm = document.getElementById("regForm");
regForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let fname = e.target.firstName.value;
  let lname = e.target.lastName.value;
  let contact = e.target.contact.value;
  let email = e.target.email.value.toLowerCase();
  let password = e.target.password.value;

  let userData = JSON.parse(localStorage.getItem("userDetails")) || [];
  let checkStatus = false;

  // Check duplication of email
  for (let val of userData) {
    if (val.EmailId === email) {
      checkStatus = true;
      break;
    }
  }

  if (checkStatus) {
    alert("User already exists!");
  } else {
    userData.push({
      first_Name: fname,
      last_Name: lname,
      phoneNo: contact,
      EmailId: email,
      Password: password,
      Balance: 1000.00
    });

    localStorage.setItem("userDetails", JSON.stringify(userData));
    alert("Sign up successful!");
    window.location.href = "login-form.html"
    e.target.reset();
  }
});


