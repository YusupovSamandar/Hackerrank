/*
   Birthday Cake Candles
*/

function birthdayCakeCandles(ar) {
   let max = Math.max(...ar);
   let sum = 0;
   ar.forEach((elem) => {
      if (elem === max) {
         sum++;
      }
   })
   return sum;
}
