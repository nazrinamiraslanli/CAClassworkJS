let button = document.querySelector(".toggle");
localStorage.getItem("dark-mode") === "true" &&
  document.body.classList.add("dark-mode");
button.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", true);
  } else {
    localStorage.setItem("dark-mode", false);
  }
//    localStorage.getItem("dark-mode") === "true"
//       ? localStorage.setItem("dark-mode", true)
//       : localStorage.setItem("dark-mode", false);
});
// function myFunction() {
//     let body = document.body;
//     body.classList.toggle("dark-mode");
//  }
