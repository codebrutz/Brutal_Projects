const input = { name: "Alice", age: 25 };
let output = "";

for (let key in input) {
  if (output !== "") {
    output += "&";
  } //great logic applied here that is if output is empty then don't add & symbol over there . cause in start we just need the key ,
  output += key + "=" + input[key];
}

console.log(output); // "name=Alice&age=25"
