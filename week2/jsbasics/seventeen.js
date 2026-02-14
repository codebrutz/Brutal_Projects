const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 4, c: 5, d: 6 };
const output = [];

for (let key in obj1) {
  if (obj2[key] !== undefined) {
    output.push(key);
  }
}

console.log(output); // ["b", "c"]
