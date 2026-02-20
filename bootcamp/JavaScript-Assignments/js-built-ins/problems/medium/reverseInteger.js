/*
  Write a function `reverseInteger` which takes an integer as input and returns the integer with its digits reversed. If the input is negative, the reversed integer should also be negative.

  What is reversing an integer?
  - Reversing an integer means rearranging its digits in the opposite order while maintaining its sign.

  Example:
  - Input: 123
  - Output: 321

  - Input: -456
  - Output: -654

  - Input: 100
  - Output: 1

  - Input: 0
  - Output: 0

  Once you've implemented the logic, test your code by running
  - `npm run test-reverseInteger`
*/

function reverseInteger(n) {
  // Your code here
  let sign = n < 0 ? -1 : 1;
  n = Math.abs(n);

  let reversed = 0;

  while (n !== 0) {
    let remainder = n % 10;
    reversed = reversed * 10 + remainder;
    n = Math.floor(n / 10);
  }

  return sign * reversed;
}

module.exports = reverseInteger;
