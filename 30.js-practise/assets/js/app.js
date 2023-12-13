const BASE_URL = "http://localhost:3000";
const tBody = document.querySelector("tbody");
(async () => {
  const res = await axios(`${BASE_URL}/users`);
  drawTable(res.data);
})();

function drawTable(arr) {
  tBody.innerHTML = "";
  arr.forEach((element) => {
    let trElem = document.createElement("tr");
    trElem.innerHTML += `
    <td class="row">${element.id}</td>
    <td><img src="${element.userphoto}" /></td>
    <td>${element.name}</td>
    <td>${element.surname}</td>
    <td>${element.email}</td>
    <td>${element.date}</td>
    <td>
    <a class="editBtn" href="form.html?id=${element.id}">Edit</a>
    <button onclick=deleteData(${element.id},this) class="delBtn">Delete</button>
    <button onclick=addData(${element.id},this) class="addBtn">Add Fav</button>
    </td>`;
    tBody.append(trElem);
  });
}
async function deleteData(id, del) {
  if (confirm("Are you sure?")) {
    await axios.delete(`${BASE_URL}/users/${id}`);
    del.closest("tr");
  }
}
const fav = Json.parse(localStorage.getItem("fav")) || [];
async function addFav(id) {
  let res = await axios(`${BASE_URL}/users/${id}`);
  console.log(res.data);
  let obj = fav.find((item = item.id === id));
  console.log(obj);
  if (!obj) {
    fav.pus(res.data);
    localStorage.setItem("fav", JSON.stringify(fav));
    window.location = "fav.html";
  } else {
    alert("var");
  }
}
