const input = [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" },
];
const output = {};

for (let i = 0; i < input.length; i++) {
  let city = input[i].city;
  if (output[city]) {
    output[city].push(input[i].name);
  } else {
    output[city] = [input[i].name];
  }
}

console.log(output); // { Delhi: ["A", "C"], Mumbai: ["B"] }
