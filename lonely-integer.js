/*
   Lonely Integer
*/

function lonelyinteger(a) {
   let res = a.reduce((acc, num) => {
      if (!acc[num]) {
         acc[num] = 1
      } else {
         delete acc[num];
      }
      return acc;
   }, {});
   return Object.keys(res)
}