const input = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];
const output = {};

for (let i = 0; i < input.length; i++) {
  output[input[i].id] = input[i];
}

console.log(output); // { 1: { id:1, name:"A" }, 2: { id:2, name:"B" } }
