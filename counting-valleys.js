/*
   Counting Valleys
*/

function countingValleys(n, s) {
   let count = 0,
      result = 0;
   let arr = s.split("");
   arr.forEach((elem) => {
      if (elem === "U") {
         count++;
         if (count === 0) {
            result++;
         }
      } else {
         count--;
      }
   });

   return result;
}