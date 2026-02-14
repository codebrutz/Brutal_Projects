const input = { a: 1, b: 2, c: 3 };
let count = 0;

for (let key in input) {
  count++;
}

console.log(count); // 3
