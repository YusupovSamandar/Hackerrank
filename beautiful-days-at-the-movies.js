/*
   Beautiful Days at the Movies
*/

function beautifulDays(i, j, k) {
   let bDay = 0;
   for (let x = i; x <= j; x++) {
      let y = x.toString().split("").reverse().join("");
      y = parseInt(y);
      let day = Math.abs(x - y);
      if (day % k === 0) {
         bDay++;
      }
   }
   return bDay;
}