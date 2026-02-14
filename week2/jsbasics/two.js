const input = ["apple", "banana", "apple", "orange", "banana", "apple"];

const output = {};

for (let i = 0; i < input.length; i++) {
  if (output[input[i]]) {
    output[input[i]] += 1;
  } else {
    output[input[i]] = 1;
  }
}

console.log(output);
