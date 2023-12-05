let curCity = "Ganja";

function getWeather() {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=de4fcc1d06a64857be7101727222212&q=${curCity}&aqi=no`
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
}

getWeather()
function drawCards(arr) {
    product.innerHTML = "";
    arr.forEach((element) => {
      product.innerHTML += `
       <div class="country">
       <div class="city"><p>${element.location.country}</p></div>
        <div class="product-image">
            <img src="${element.current.condition.icon}" style="width: 100%" alt="" />
        </div>
        <div class="product-heading">
            <p class="title">${element.current.condition.text}</p>
            <p class="description">${element.current.condition.temp_c}</p>
            <span>${element.current.condition.feelslike_c}</span>
        </div>
       </div> 
      `;
    });
  }