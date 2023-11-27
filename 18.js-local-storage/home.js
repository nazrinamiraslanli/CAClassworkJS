const form = document.querySelector("#form");
const fName = document.querySelector("#firstName");
const lName = document.querySelector("#lastName");
const address = document.querySelector("#address");

let data = JSON.parse(localStorage.getItem("personObj")) || [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let info = {
    id: Date.now(),
    firstName: fName.value,
    lastName: lName.value,
    address: address.value,
  };

  data.push(info);
  localStorage.setItem("personObj", JSON.stringify(data));

  fName.value = "";
  lName.value = "";
  address.value = "";
});
