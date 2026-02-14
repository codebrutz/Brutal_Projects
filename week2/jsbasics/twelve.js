//somewhat soubtful about this question

const input = { a: 3, b: 1, c: 2 };
const entries = [];

for (let key in input) {
  entries.push([key, input[key]]);
}
//bubble sort
for (let i = 0; i < entries.length; i++) {
  for (let j = i + 1; j < entries.length; j++) {
    if (entries[i][1] > entries[j][1]) {
      let temp = entries[i];
      entries[i] = entries[j];
      entries[j] = temp;
    }
  }
}

console.log(entries); // [["b",1], ["c",2], ["a",3]]
