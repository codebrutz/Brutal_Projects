const input = { A: [80, 90], B: [70, 75, 85] };
let topStudent = "";
let topAverage = -Infinity;

for (let student in input) {
  let sum = 0;
  for (let i = 0; i < input[student].length; i++) {
    sum += input[student][i];
  }
  let average = sum / input[student].length;
  if (average > topAverage) {
    topAverage = average;
    topStudent = student;
  }
}

console.log(topStudent); // A
