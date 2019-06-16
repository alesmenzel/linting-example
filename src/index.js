/* eslint-disable no-console */

/**
 * Return the nth fibonacci number
 * 0 1 1 2 3 5 8 13 ...
 *
 * @param {Number} pos Position <0;infinite>
 */
function fibonacci(pos) {
  if (pos < 1) {
    return 0;
  }
  if (pos < 3) {
    return 1;
  }

  return fibonacci(pos - 1) + fibonacci(pos - 2);
}

console.log('fibonacci(0)', fibonacci(0));
console.log('fibonacci(1)', fibonacci(1));
console.log('fibonacci(2)', fibonacci(2));
console.log('fibonacci(3)', fibonacci(3));
console.log('fibonacci(4)', fibonacci(4));
console.log('fibonacci(5)', fibonacci(5));

console.log('fibonacci(6)', fibonacci(6));

console.log('fibonacci(7)', fibonacci(7));
console.log('fibonacci(8)', fibonacci(8));

console.log('fibonacci(9)', fibonacci(9));
console.log('fibonacci(10)', fibonacci(10));
console.log('fibonacci(11)', fibonacci(11));
console.log('fibonacci(12)', fibonacci(12));
