const BASE_URL = `https://dog.ceo/api/breeds/image/random`;
let div = document.querySelector(".section");
const img = document.createElement("img");
img.src =
  "https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_2649.jpg";
div.append(img);
setInterval(() => {
  fetch(`${BASE_URL}`)
    .then((response) => response.json())
    .then((data) => {
      img.src = data?.message;
    });
}, 2000);
