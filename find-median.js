/*
   Find the Median
*/

function findMedian(arr) {
   let n = arr.length;
   let sorted = arr.sort((a, b) => {
      if (a.length === b.length) {
         return a > b ? 1 : -1
      }
      return a.length - b.length
   });
   let res = (n - 1) / 2

   return sorted[res];

}