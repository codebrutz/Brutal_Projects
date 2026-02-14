// -------------------this was a good question
const given = { a: 1, b: 2, c: 3, d: 4 };
const size = 2;
const output = [];
let temp = [];
const entries = [];

for (let key in given) {
  entries.push([key, given[key]]);
}

for (let i = 0; i < entries.length; i++) {
  temp.push(entries[i]);
  if (temp.length === size) {
    output.push(temp);
    temp = [];
  }
}

console.log(output);
