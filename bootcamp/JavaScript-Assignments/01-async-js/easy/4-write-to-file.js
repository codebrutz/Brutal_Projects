// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");
console.log("Start");

fs.writeFile("a.txt", "Hello World", function (err, contents) {
  if (err) {
    console.log("Error writing file:", err);
    return;
  }
  console.log("File written successfully");
});

console.log("End");
let count = 0;
for (let i = 0; i < 1000000; i++) {
  count++;
}
console.log(count);
