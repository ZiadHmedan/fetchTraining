//  1 )

fetch("//fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// 2 )

const body = {
  category: "newMenClothesByZiad",
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  price: 109.95,
  rating: { rate: 3.9, count: 120 },
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
};

fetch("//fakestoreapi.com/products", {
  method: "post",
  body: JSON.stringify(body),
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// 3 )

const bodyNew = {
  category: "newMenClothesByArmano",
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  price: 109.95,
  rating: { rate: 3.9, count: 120 },
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
};

fetch("//fakestoreapi.com/products/7", {
  method: "put",
  body: JSON.stringify(bodyNew),
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// 4 )

fetch("//fakestoreapi.com/products/6", {
  method: "delete",
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
