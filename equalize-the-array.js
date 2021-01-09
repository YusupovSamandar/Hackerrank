/*
   Equalize the Array
*/

function equalizeArray(arr) {
   let numRep = arr.reduce((acc, num) => {
      if (!acc[num]) {
         acc[num] = 1;
      } else {
         acc[num]++
      }
      return acc;
   }, {});
   let val = Object.values(numRep);
   let max = Math.max(...val);
   return arr.length - max
}