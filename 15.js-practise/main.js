let result = document.querySelector(".result");
let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");
let increment = document.querySelector(".increment");
let decrement = document.querySelector(".decrement");
let inValue = document.querySelector(".invalue");
let deValue = document.querySelector(".devalue");
let inInpult = document.querySelector(".ininpult");
let deInpult = document.querySelector(".deinpult");
startBtn.style.backgroundColor = "green";
startBtn.style.color = "white";
startBtn.style.width = "100px";
startBtn.style.height = "40px";
startBtn.style.border = "none";
stopBtn.style.backgroundColor = "red";
stopBtn.style.color = "white";
stopBtn.style.width = "100px";
stopBtn.style.height = "40px";
stopBtn.style.border = "none";
resetBtn.style.backgroundColor = "red";
resetBtn.style.color = "white";
resetBtn.style.width = "130px";
resetBtn.style.height = "40px";
resetBtn.style.border = "none";
increment.style.backgroundColor = "teal";
increment.style.color = "white";
increment.style.width = "150px";
increment.style.height = "40px";
increment.style.border = "none";
decrement.style.backgroundColor = "teal";
decrement.style.color = "white";
decrement.style.width = "150px";
decrement.style.height = "40px";
decrement.style.border = "none";
inValue.style.backgroundColor = "orange";
inValue.style.width = "230px";
inValue.style.height = "30px";
deValue.style.backgroundColor = "orange";
deValue.style.width = "230px";
deValue.style.height = "30px";
inInpult.style.borderColor = "orange";
inInpult.style.width = "230px";
inInpult.style.height = "30px";
deInpult.style.borderColor = "orange";
deInpult.style.width = "230px";
deInpult.style.height = "30px";
result.style.color = "blue";
result.style.fontSize = "1rem";
console.log(result);

let count = 0;
let countInterval;
startBtn.addEventListener("click", function () {
  clearInterval(countInterval);
  countInterval = setInterval(() => {
    result.innerText = ++count;
  }, 100);
});
stopBtn.addEventListener("click", function () {
  clearInterval(countInterval);
});
resetBtn.addEventListener("click", function () {
  count = 0;
  result.innerText = 0;
  clearInterval(countInterval);
});
increment.addEventListener("click", function () {
  result.innerText = ++count;
});
decrement.addEventListener("click", function () {
  result.innerText = --count;
});
inValue.addEventListener("click", function () {
  count += +inInpult.value;
  result.innerText = count;
});
deValue.addEventListener("click", function () {
  count -= +deInpult.value;
  result.innerText = count;
});
