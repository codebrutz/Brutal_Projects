const input = { name: "Rahul", age: 23, city: "Noida" };
const keys = ["name", "city"];
const output = {};

for (let i = 0; i < keys.length; i++) {
  output[keys[i]] = input[keys[i]];
}

console.log(output); // { name: "Rahul", city: "Noida" }
