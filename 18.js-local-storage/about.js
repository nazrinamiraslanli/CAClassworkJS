let userData = JSON.parse(localStorage.getItem("personObj"));
renderTable(userData);
function renderTable(userData) {
  let table = document.querySelector("table");
  let tbody = document.querySelector("tbody");
  userData.forEach((data) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${data.id}</td>
    <td>${data.firstName}</td>
    <td>${data.lastname}</td>
    <td>${data.address}</td>`;
    tbody.append(tr);
  });
  table.appendChild(tbody);
}
