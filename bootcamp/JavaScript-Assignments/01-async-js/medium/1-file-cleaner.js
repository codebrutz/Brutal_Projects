// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

fs.readFile("test.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }
  let content = data;
  const cleanedData = content.replace(/\s+/g, " ").trim();

  fs.writeFile("test.txt", cleanedData, (err) => {
    if (err) {
      console.log("Error writing file:", err);
      return;
    }

    console.log("File cleaned and updated successfully");
  });
});
fs.readFile("test.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("error hogya master");
  }
  console.log(data);
});
