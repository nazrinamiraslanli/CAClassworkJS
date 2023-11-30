let main = document.querySelector(".main");
main.style.backgroundColor = "rgb(147, 147, 231)";
main.style.display = "flex";
main.style.alignItems = "center";
main.style.justifyContent = "center";
main.style.height = "100vh";
let form = document.querySelector(".form");
form.style.width = "300px";
form.style.height = "400px";
form.style.border = "1px solid black";
form.style.backgroundColor = "rgb(252, 247, 219)";
form.style.textAlign = "center";
let forms = document.querySelector("#form");
forms.style.padding = "30px 30px";
let inputEmail = document.querySelector("#email");
inputEmail.style.padding = "8px 20px";
inputEmail.style.borderRadius = "8px";
let inputPasword = document.querySelector("#password");
inputPasword.style.padding = "8px 20px";
inputPasword.style.borderRadius = "8px";
let userObj = JSON.parse(localStorage.getItem("user")) ?? [];
forms.addEventListener("submit", function (event) {
    event.preventDefault();
  let obj = {
    email: inputEmail.value,
    password: inputPasword.value,
  };
  userObj.push(obj)
  localStorage.setItem("user", JSON.stringify(userObj));
});
