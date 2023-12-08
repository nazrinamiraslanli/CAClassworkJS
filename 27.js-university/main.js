let spinner = document.querySelector(".spinner");
const tBody = document.querySelector("tbody");
const search = document.querySelector("#search");

const BASE_URL = "http://universities.hipolabs.com";
(async () => {
  spinner.classList.add("show");
  const res = await axios(`${BASE_URL}/search?country=Azerbaijan`);
  spinner.classList.remove("show");
  drawTable(res.data);
})();
// async function getData() {
//
//   let response = await axios(`${BASE_URL}/search?country=Azerbaijan`);
//   drawTable(response.data);
//
// }
function drawTable(data) {
  tBody.innerHTML = "";
  data.forEach((element) => {
    const trElem = document.createElement("tr");
    trElem.innerHTML = `
                  <td>${element.name}</td>
                  <td>${element.country}</td>
                  <td>${element.domains[0]}</td>
                  <td><a href="${element.web_pages[0]}">${element.web_pages[0]}</a></td>
               `;
    tBody.append(trElem);
  });
}

search.addEventListener("input", async function (event) {
  let response = await axios(
    `${BASE_URL}/search?country=Azerbaijan&name=${event.target.value}`
  );
  drawTable(response.data);
});
