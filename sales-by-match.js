/*
   Sales by Match
*/

function sockMerchant(n, ar) {
   let freq = ar.reduce((acc, num) => {
      if (!acc[num]) {
         acc[num] = 1;
      } else {
         acc[num]++;
      }
      return acc;
   }, {});

   let values = Object.values(freq).map((num) => {
      return Math.floor(num / 2);
   }).reduce((acc, elem) => acc + elem);

   return values;

}