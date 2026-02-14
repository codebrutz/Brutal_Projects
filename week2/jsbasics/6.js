const input = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" },
];

const seen = {};
const output = [];

for (let i = 0; i < input.length; i++) {
  if (seen[input[i].id] === undefined) {
    seen[input[i].id] = true;
    output.push(input[i]);
  }
}

console.log(output);
