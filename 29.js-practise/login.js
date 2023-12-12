let form = document.querySelector("form");
let allInputs = document.querySelectorAll(".form-control");
let users = JSON.parse(localStorage.getItem("users")) || [];
let faEye = document.querySelector("fa-eye");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let user = users.find(
    (item) =>
      item.email === allInputs[0].value && item.password === allInputs[1].value
  );
  console.log(user);
  if (user) {
    localStorage.setItem("userName", user.userName);
    window.location = "home.html";
  } else {
    window.alert("Username or password is not correct!");
  }
  allInputs.forEach((item) => {
    item.value = "";
  });
});
faEye.addEventListener("click", function () {
  console.log(this.className);
  if (this.className === "fa-solid fa-eye") {
    password.input = "text";
    this.className = "fa-regular fa-eye";
  } else {
    passwordInput.type = "password";
    this.className = "fa-solid fa-eye";
  }
});
