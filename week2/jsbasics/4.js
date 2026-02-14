// 4. Check for permissions from roles
//     - Input:

//         ```jsx
//         roles={ admin:["read","write"], user:["read"], staff: ["write"]}
//         checkRole="user",
//         action="write"
//         ```

//     - Output:

//         ```jsx
//         false
//         ```
const roles = { admin: ["read", "write"], user: ["read"], staff: ["write"] };
const checkRole = "user";
const action = "write";

let result = false;

for (let i = 0; i < roles[checkRole].length; i++) {
  if (roles[checkRole][i] === action) {
    result = true;
    break;
  }
}

console.log(result); // false
