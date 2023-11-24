let keys = document.querySelectorAll(".key");
let words=document.querySelector(".words")

window.addEventListener("keydown", function (event) {
  //   console.log(event.key);

  keys.forEach((key) => {
    // console.log(key.innerText == event.key);
    if (key.innerText == event.key) {
      key.style.backgroundColor = "green";
      key.style.transform="scale(1.2)"

    }
  });
  words.innerText+=event.key
});
window.addEventListener("keyup", function (event) {
  //   console.log(event.key);

  keys.forEach((key) => {
    // console.log(key.innerText == event.key);
    if (key.innerText == event.key) {
      key.style.backgroundColor = "darkcyan";
      key.style.transform="none"
    }
  });
});