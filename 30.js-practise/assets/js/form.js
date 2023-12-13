const form = document.querySelector("form");
const allInputs = document.querySelectorAll(".form-control");
const BASE_URL = "http://localhost:3000";
const id = new URLSearchParams(window.location.search).get("id");
async function fillForm() {
  const res = await axios(`${BASE_URL}/users/${id}`);
  console.log(res.data);
  allInputs[0].value = res.data.firstName;
  allInputs[1].value = res.data.lastName;
  allInputs[2].value = res.data.email;
}
if (id) {
  fillForm();
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let user = {
    firstName: allInputs[0].value,
    lastName: allInputs[0].value,
    Email: allInputs[0].value,
  };

  if (!id) {
    axios.post(`${BASE_URL}/users`, user);
  } else {
    axios.patch(`${BASE_URL}/users/${id}`, user);
  }

  allInputs.forEach((item) => (item.value = ""));
});
