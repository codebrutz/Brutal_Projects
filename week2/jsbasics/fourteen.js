const input = { name: "alice", city: "delhi" };
const output = {};

for (let key in input) {
  output[key] = input[key][0].toUpperCase() + input[key].slice(1);
}
//basic string operation as done in java as well
console.log(output); // { name: "Alice", city: "Delhi" }
