//easy problem
const input = { a: 0, b: null, c: "hello", d: undefined, e: 5 };
const output = {};

for (let key in input) {
  if (input[key]) {
    // directly checks if value is truthy
    // this is what i learnt from previous question in which it was explicitly told to check for undefined
    // as 0,null all leads to false while normal if condition and here it was required . so worked fine here .
    output[key] = input[key];
  }
}

console.log(output);
