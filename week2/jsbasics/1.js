const given = [
  { user: "A", amount: 100 },
  { user: "B", amount: 200 },
  { user: "A", amount: 50 },
];

const result = {};

for (let i = 0; i < given.length; i++) {
  if (result[given[i].user]) {
    result[given[i].user] += given[i].amount;
  } else {
    result[given[i].user] = given[i].amount;
  }
}

console.log(result);
