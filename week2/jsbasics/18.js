// 18. **Sort array of objects by name then age**
//     - Input:

//         ```jsx
//         [
//           { name: "Alice", age: 30 },
//           { name: "Bob", age: 25 },
//           { name: "Alice", age: 22 }
//         ]

//         ```

//     - Output:

//         ```jsx
//         [
//           { name: "Alice", age: 22 },
//           { name: "Alice", age: 30 },
//           { name: "Bob", age: 25 }
//         ]

//         ```

const given = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Alice", age: 22 },
];
given.sort((a, b) => a.name.localeCompare(b.name));
given.sort((a, b) => a.age - b.age);
console.log(given);
