// Task1
//  let count = 0;
// let countInterval = setInterval(() => {
//   console.log(++count);

//   if (count === 4) {
//     clearInterval(countInterval);
//   }
// }, 1000);

// let count=0
// let countInterval = setInterval(() => {
//   console.log(++count);
// }, 1000);

// setTimeout(() => {
//   clearInterval(countInterval);
// }, 4000);

// Task2
// let oneBtn = document.querySelector(".button");
// let result = document.querySelector(".result");
// oneBtn.addEventListener("click", function(){
// result.style.fontSize="30px";
// result.style.color="red";
// result.innerText="I am hacker"
// });

// Task3
let texts = document.querySelectorAll(".text");
console.log(texts);
texts.forEach((el) => {
  console.log(el.innerText);
});
// Task4
let str = "developer";
let i = 1;
// let interval = setInterval(() => {
//   if (i <= str.length) {
//     str = str.slice(0, i).toLocaleUpperCase() + str.slice(i);
//     console.log(str);
//     i++;
//   } else {
//     clearInterval(setInterval);
//   }
// }, 1000);
// Task5
let twoBtn = document.querySelector(".change");
let colors = ["yellow", "red", "green", "black", "orange"];
twoBtn.addEventListener("click", function () {
  document.body.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
});
