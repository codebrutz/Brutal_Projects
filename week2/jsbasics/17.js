const input = { a: 10, b: 50, c: 30, d: 40 };
const N = 2;

const output = Object.entries(input) //array mein badla
  .sort((a, b) => b[1] - a[1]) // descending order mein sort kiya
  .slice(0, N) // take first N (warmup class used here)
  .map((pair) => pair[0]); // extract just the key (again warmup)

console.log(output);
