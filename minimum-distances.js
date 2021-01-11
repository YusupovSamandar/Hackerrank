/*
   Minimum Distances
*/

function minimumDistances(a) {
   let obj = {};

   let res = a.reduce((acc, num, index) => {
      // console.log(num);
      if (!obj[num] && typeof obj[num] !== 'number') {
         obj[num] = index;
      } else {
         acc[num] = index - obj[num];
      }
      return acc;
   }, {});

   let output = Object.values(res);

   if (output.length < 1) return -1;

   return Math.min(...output);
}
