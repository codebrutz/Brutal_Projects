const input = { x: [1, 2, 3], y: [2, 3, 4], z: [4, 5] };
const seen = {};
const output = [];

for (let key in input) {
  for (let i = 0; i < input[key].length; i++) {
    if (!seen[input[key][i]]) {
      seen[input[key][i]] = true;
      output.push(input[key][i]);
    }
  }
}
// in js we check the unique thing by using object which acts as map
console.log(output); // [1, 2, 3, 4, 5]
