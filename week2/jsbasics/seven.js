const input = { a: 20, b: 60, c: 40, d: 90 };
const output = {};

for (let key in input) {
  if (input[key] > 50) {
    output[key] = input[key];
  }
}

console.log(output); // { b: 60, d: 90 }
