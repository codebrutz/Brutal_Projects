const expected = ["a", "b", "c"];
const actual = ["b", "c", "d"];
const result = { missing: [], extra: [] };

for (let i = 0; i < expected.length; i++) {
  if (actual.indexOf(expected[i]) === -1) {
    result.missing.push(expected[i]);
  }
}

for (let i = 0; i < actual.length; i++) {
  if (expected.indexOf(actual[i]) === -1) {
    result.extra.push(actual[i]);
  }
}

console.log(result); // { missing: ["a"], extra: ["d"] }
