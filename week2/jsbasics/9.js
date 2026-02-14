const given = [
  { id: 1, category: "fruit" },
  { id: 2, category: "veggie" },
  { id: 3, category: "fruit" },
];
const result = {};
for (let i = 0; i < given.length; i++) {
  if (result[given[i].category] !== undefined) {
    result[given[i].category].push(given[i].id);
  } else {
    result[given[i].category] = [given[i].id];
  }
}
console.log(result);
