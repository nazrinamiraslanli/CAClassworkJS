let userName = document.querySelector(".username");
let email = document.querySelector(".emailInput");
let password = document.querySelector(".passwordInput");
let form = document.getElementById("userForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  

  if (email.value !== "" && password.value !== "") {
    let user = {
      email: email.value,
      password: password.value,
    };
    console.log(user);
  } else {
    alert("input fields can not be empty");
  }
});
