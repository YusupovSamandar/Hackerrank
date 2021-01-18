/*
   Counting Sort 1
*/

// Complete the countingSort function below.
function countingSort(arr) {
   let output = Array(100).fill(0);
   for (let i = 0; i < arr.length; i++) {
      let index = arr[i];
      output[index]++
   }
   return output;
}