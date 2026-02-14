// 20. **Merge two objects (no sum, override second)**
//     - Input:

//         ```jsx
//         { a: 10, b: 20 }
//         { a: 5, c: 15 }

//         ```

//     - Output:

//         ```jsx
//         { a: 5, b: 20, c: 15 }
//         ```

const given1 = { a: 10, b: 20 };
const given2 = { a: 5, c: 15 };

let ans = {};
for (i in given1) {
  if (ans[i] === undefined) {
    ans[i] = given1[i];
  }
}
for (i in given2) {
  if (ans[i] === undefined) {
    ans[i] = given2[i];
  }
}
console.log(ans);
