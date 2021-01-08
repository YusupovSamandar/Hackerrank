/*
   Find Digits
*/

function findDigits(n) {
   n = n.toString()
   let count = 0;
   let arr = n.split("");
   for (const num of arr) {
      let numb = Number(num);
      if (numb == 0) {
         continue;
      } else {
         if (n % numb === 0) {
            count++;
         }
      }
   }
   return count;
}