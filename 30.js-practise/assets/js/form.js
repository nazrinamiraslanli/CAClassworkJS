const form = document.querySelector("form");
const allInputs = document.querySelectorAll(".form-control");
const BASE_URL = "http://localhost:3000";
const id = new URLSearchParams(window.location.search).get("id");
async function fillForm() {
  const res = await axios(`${BASE_URL}/users/${id}`);
  console.log(res.data);
  allInputs[0].value = res.data.name;
  allInputs[1].value = res.data.surname;
  allInputs[2].value = res.data.email;
  allInputs[3].value=res.data.userphoto
}
if (id) {
  fillForm();
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let user = {
    name: allInputs[0].value,
    surname : allInputs[1].value,
    email: allInputs[2].value,
    userphoto: `./assets/img/${allInputs[3].value.split("\\")[2]}`,
    date: date.toLocaleString(),
  };

  if (!id) {
    axios.post(`${BASE_URL}/users`, user);
  } else {
    axios.patch(`${BASE_URL}/users/${id}`, user);
  }

  allInputs.forEach((item) => (item.value = ""));
});
