const BASE_URL = `https://api.escuelajs.co/api/v1/products`;
fetch(`${BASE_URL}/customers`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    drawCards(data);
  })
  .catch((err) => {
    console.log(err);
  });
  let newProductObj={
    title:inputs[0].value,
    price:inputs[0].value,
    
  }