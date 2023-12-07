let cards = document.querySelector(".cards");
const BASE_URL = "  http://localhost:3000";
async function getAllData() {
  const res = await axios(`${BASE_URL}/blogs`);
  
  drawCards(res.data);
}
function drawCards(arr) {
  arr.forEach((element) => {
    cards.innerHTML += `
      <div class="card">
            <h3>${element.title}</h3>
            <span>${element.body.slice(1, 10)}<a href="#">Read More</a></span>
            <p>${element.author}</p>
            <div class="but">
              <button class="delBtn" onclick=delete>Delete</button>
              <button class="editBtn" onclick=edit><a href="blog.html?">Edit</a></button>
            </div>
          
        </div>
        `;
  });
}
