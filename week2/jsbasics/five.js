const input = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] };
const output = [];

for (let key in input) {
  for (let i = 0; i < input[key].length; i++) {
    output.push(input[key][i]);
  }
}

console.log(output); // ["apple", "banana", "carrot", "pea"]
