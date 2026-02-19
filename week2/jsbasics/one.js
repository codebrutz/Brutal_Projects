// Sum values in object arrays
const input = { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] };

const output = {};

for (let key in input) {
  let sum = 0;
  for (let i = 0; i < input[key].length; i++) {
    sum += input[key][i];
  }
  output[key] = sum;
}

console.log(output);
