/*
   Mini-Max Sum
*/

function miniMaxSum(arr) {
   let sorted = arr.sort((a, b) => {
      return a - b;
   })
   let min = 0;
   for (let i = 1; i < sorted.length; i++) {
      min += sorted[i];
   }
   let max = 0;
   for (let x = 0; x < sorted.length - 1; x++) {
      max += sorted[x];
   }
   console.log(max + " " + min);
}