/*
   Breaking the Records
*/

function breakingRecords(scores) {
   let min = 0;
   let max = 0;
   let sumMin = 0;
   let sumMax = 0;
   scores.forEach((elem) => {
      if (elem < min) {
         min = elem;
         sumMin++;
      } else if (elem > max) {
         max = elem;
         sumMax++
      }
   });
   return [sumMax, sumMin];
}
