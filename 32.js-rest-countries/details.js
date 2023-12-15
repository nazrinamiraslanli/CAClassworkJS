let card = document.querySelector(".card");
const BASE_URL = `https://restcountries.com/v2`;
const nameValue = new URLSearchParams(window.location.search).get("name");
let darkBtn = document.querySelector(".dark");
let body = document.querySelector("body");

async function getData() {
  const res = await axios(`${BASE_URL}/name/${nameValue}`);
  //   card.innerHTML=""
  card.innerHTML = `
  <img src="${res.data[0].flags?.png}" alt="">
  <div class="text">
  <h2>${res.data[0].name}</h2>
   <h5>Population:${res.data[0].population}</h5>
   <h5>Region:${res.data[0].region}</h5>
   <h5>Capital:${res.data[0].capital}</h5>
   <button class="back" onclick=goBack()>Go back</button>
  </div>
    `;
}
getData();

function goBack() {
  window.history.back();
}

darkBtn.addEventListener("click", function () {
  body.classList.toggle("darkk");
  localStorage.setItem("mode", body.classList);
});
if (localStorage.getItem("mode") != "") {
  document.body.classList.add(localStorage.getItem("mode"));
}
