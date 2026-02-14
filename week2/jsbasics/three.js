const input = { a: "x", b: "y", c: "z" };
const output = {};

for (let key in input) {
  output[input[key]] = key;
}

console.log(output); // { x: "a", y: "b", z: "c" }
