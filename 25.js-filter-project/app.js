let allCards = document.querySelector(".allCards");
const BASE_URL = "https://fakestoreapi.com/products/";
let electronics = document.querySelector(".electronics");
let jewelery = document.querySelector(".jewelery");
let men = document.querySelector(".men");
let women = document.querySelector(".women");

function getAllData(endpoint) {
  fetch(`${BASE_URL}/${endpoint}`)
    .then((res) => res.json())
    .then((data) => drawCards(data));
}

// getAllData("jewelery")

function drawCards(arr) {
  allCards.innerHTML = "";
  arr.forEach((element) => {
    let card = document.createElement("div");
    card.innerHTML += `
    <a href="./detail.html?id=${element.id}">
    <div class="img">
    <img src="${element.image}" alt="" />
    </div>
              <p>${element.title}</p>
              <p>${element.price}</p>
              
        </a>
        
      `;
    allCards.append(card);
  });
}
electronics.addEventListener("click", function () {
  getAllData("category/electronics");
});
jewelery.addEventListener("click", function () {
  getAllData("category/jewelery");
});
men.addEventListener("click", function () {
  getAllData("category/men's clothing");
});
women.addEventListener("click", function () {
  getAllData("category/women's clothing");
});

getAllData("");
