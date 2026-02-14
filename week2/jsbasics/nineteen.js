const given = { a: 1, b: "hello", c: 3 };
for (let i in given) {
  if (typeof given[i] !== "number") {
    console.log("false");
    break;
  }
}
