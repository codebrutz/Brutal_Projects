const obj = { user: { profile: { name: "Alice", age: 25 } } };

function extract(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      extract(obj[key]); // go deeper
    } else {
      console.log(obj[key]);
      break; // it's a primitive, print it
    }
  }
}

extract(obj); // Alice 25

/*When it hits user and profile — they're objects, so it goes deeper. When it finally hits "Alice" and 25 — they're primitives (string and number), so it prints them.
But notice your instinct said "loop breaks when it finds a string" — actually the loop doesn't break, it keeps going to find all primitives. Breaking would stop after just "Alice" and miss 25. but i need to break as this question is to get the nested object destruction*/

//some smarter move
// const obj = { user: { profile: { name: "Alice", age: 25 } } };

const {
  user: {
    profile: { name, age },
  },
} = obj;

console.log(name, age);
// i am unable to get the code
