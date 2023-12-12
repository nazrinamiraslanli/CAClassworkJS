let form = document.querySelector("form");
let allInputs = document.querySelectorAll(".form-control");
let users = JSON.parse(localStorage.getItem("users")) || [];
// console.log(allInputs);
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let bool = users.some(
    (item) =>{
        return item.userName === allInputs[0].value || item.email === allInputs[1].value
    }    
  );
//   console.log(bool);
  if (!bool) {
    let userObj = {
      userName: allInputs[0].value,
      email: allInputs[1].value,
      password: allInputs[2].value,
      id: Date.now(),
    };

    users.push(userObj);
    //   console.log(users);

    localStorage.setItem("users", JSON.stringify(users));
  } else {
    window.alert("username or email already used");
  }

  allInputs.forEach((item) => {
    item.value = "";
  });

  window.location = "login.html";
});
