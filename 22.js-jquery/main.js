let main = document.querySelector(".main");
let inputMovies = document.querySelector("#inputMovies");
let addBtn = document.querySelector(".addBtn");
inputMovies.style.padding="10px"
inputMovies.style.width="300px"
inputMovies.style.border="1px solid black"
inputMovies.style.borderRadius="8px"
addBtn.style.padding="10px"
addBtn.style.width="50px"

$(".addBtn").on("click", function () {
  let text = document.createElement("p");
  text.innerText = $("input").val();
  document.body.append(text);
  $("input").val("");
  $("p").css({
    backgroundColor: "teal",
    width: "100px",
    margin:"5px",
    padding:"5px"
  });
  let arr = [];
  $("input").val("");
  $("p").on("click", function () {
    this.remove();
  });
  arr.push;
  localStorage.setItem("arr",JSON.stringify(arr))
});
