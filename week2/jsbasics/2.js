// 2. **Transform API response to object (id → name)**
//     - Input:

//         ```jsx
//         [
//           { id: 1, name: "Alice" },
//           { id: 2, name: "Bob" }
//         ]
//         ```

//     - Output:

//         ```jsx
//         { 1: "Alice", 2: "Bob" }
//         ```

const input = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
let ans = {};
for (let i = 0; i < input.length; i++) {
  if (!ans[input[i].id]) {
    ans[input[i].id] = input[i].name;
  }
}
console.log(ans);
