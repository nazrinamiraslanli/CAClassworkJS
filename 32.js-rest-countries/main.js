let cards = document.querySelector(".cards");
let search = document.querySelector("#search");
let select = document.querySelector("#select");
let darkBtn = document.querySelector(".dark");
let body=document.querySelector("body")
const BASE_URL = `https://restcountries.com/v2`;
const id = new URLSearchParams(window.location.search).get("id");

async function getData(endPoint) {
  const res = await axios(`${BASE_URL}/${endPoint}`);
  console.log(res.data);
  drawCard(res.data);
}
getData("all");

function drawCard(arr) {
  cards.innerHTML = "";
  arr.forEach((element) => {
    let card = document.createElement("div");
    card.innerHTML += `
    <a href="details.html?name=${element.name}">
    
    <img src="${element.flags.svg}" alt="">
    <div class="text">
    <h2>${element.name}</h2>
     <h5>Population:${element.population}</h5>
     <h5>Region:${element.region}</h5>
     <h5>Capital:${element.capital}</h5>
    </div>
    </a>
          `;
    cards.append(card);
  });
}

search.addEventListener("input", function (e) {
  // console.log(e.target.value);
  getData(`name/${e.target.value}`);
});
select.addEventListener("change", function (e) {
  if (e.target.value != "all") {
    getData(`region/${e.target.value}`);
  } else {
    getData(`${e.target.value}`);
  }
});

darkBtn.addEventListener("click", function () {
body.classList.toggle("darkk")
localStorage.setItem("mode",body.classList)

});
if(localStorage.getItem("mode")!=""){
    document.body.classList.add(localStorage.getItem("mode"))
}
