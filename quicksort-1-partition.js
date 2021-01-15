/*
   Quicksort 1 - Partition
*/

function quickSort(arr) {
   let leftArr = [];
   let rightArr = [];
   let p = arr[0];
   for (let i = 1; i < arr.length; i++) {
      if (arr[i] > p) {
         rightArr.push(arr[i]);
      } else if (arr[i] < p) {
         leftArr.push(arr[i])
      }
   }
   return [...leftArr, p, ...rightArr];
}