/*
   Recursive fibonacci
*/


let arr = [12, 45, 89, 20];
function fibonacci(sum, indx) {
   if (indx < arr.length) {
      return fibonacci(sum + arr[indx], indx + 1);
   } else {
      return sum;
   }
}
fibonacc;