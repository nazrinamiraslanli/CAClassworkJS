let cards = document.querySelector(".cards");
const BASE_URL = "http://localhost:3000";
(async () => {
  const res = await axios(`${BASE_URL}/users`);
  drawTable(res.data);
})();

function drawTable(arr) {
  cards.innerHTML = "";
  arr.forEach((element) => {
    let card = document.createElement("div");
    card.innerHTML += `
      <div class="img">
      <img src="${element.userphoto}" alt="">
  </div>
      <h1>${element.name}</h1>
      <h1>${element.surname}</h1>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem, ipsum.</p>
            <button><a href="#">Add Fav</a></button>`;
    cards.append(card);
  });
}
