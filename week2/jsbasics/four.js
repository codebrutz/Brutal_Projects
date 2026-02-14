const input = { a: 10, b: 50, c: 20 };
let largestKey = "";
let largestValue = -Infinity;

for (let key in input) {
  if (input[key] > largestValue) {
    largestValue = input[key];
    largestKey = key;
  }
}

console.log(largestKey); // b
