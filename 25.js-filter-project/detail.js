let allCards = document.querySelector(".allCards");
const BASE_URL = "https://fakestoreapi.com/products/";
let id = new URLSearchParams(window.location.search).get("id");
function drawCards(data) {
  allCards.innerHTML = "";

  let card = document.createElement("div");
  card.innerHTML = `
      <div class="img">
      <img src="${data.image}" alt="" />
      </div>
      <div class="test">
      <p>${data.description}</p>
      <p>${data.price}</p>
      </div>
        `;
  allCards.append(card);
}
async function getAllData() {
  const res = await axios(`${BASE_URL}/${id}`);
  drawCards(res.data);
}

getAllData();
