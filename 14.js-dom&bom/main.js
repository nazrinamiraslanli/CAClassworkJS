let addBtn = document.querySelector(".addbgcolor");
addBtn.addEventListener("click", function () {
  addBtn.parentElement.style.backgroundColor = "green";
  addBtn.parentElement.style.width = "200px";
  addBtn.parentElement.style.height = "200px";
  addBtn.parentElement.style.position = "relative";
  addBtn.style.position = "absolute";
  addBtn.style.right = "20px";
  addBtn.style.bottom = "20px";
});
// let cities = document.querySelector(".cities");
// let ul = document.createElement("ul");
// let liArr = ["Ganja", "Baku", "Yevlakh", "Goranboy", "Shamkir"];
// liArr.forEach((item) => {
//   let liElem = document.createElement("li");
//   liElem.innerText = item;
//   ul.append(liElem);
// });
// cities.append(ul);

// let alliElement = document.querySelector("li");
// alliElement.forEach((item) => {
//   item.addEventListener("click", function () {
//     this.remove();
//   });
// });
let twoBtn = document.querySelector(".button");
twoBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark")
});
