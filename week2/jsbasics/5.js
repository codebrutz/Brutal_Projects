const given = [
  { id: 1, category: "electronics", price: 100 },
  { id: 2, category: "clothes", price: 50 },
  { id: 3, category: "electronics", price: 200 },
];

const object = {};

for (let i = 0; i < given.length; i++) {
  if (object[given[i].category]) {
    object[given[i].category] += given[i].price;
  } else {
    object[given[i].category] = given[i].price;
  }
}

console.log(object); // { electronics: 300, clothes: 50 }
