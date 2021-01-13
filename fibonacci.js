/*
   Fibonacci 
*/

/* 
 * this challange takes a single input which is the length of the array 
 * the task is to return an array of numbers which the length of the array will be equal to the given input 
 * the first 2 numbers will be written as [0, 1]
 * the next coming numbers will be the sum of two previous numbers
 */

function fibonacci(n) {
   let arr = [];
   for (let i = 1; i < n; i++) {
      if (i === 1) {
         arr.push(0);
      } else if (i === 2) {
         arr.push(1)
      } else {
         arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
      }
   }
   return arr;
}
fibonacci(9);