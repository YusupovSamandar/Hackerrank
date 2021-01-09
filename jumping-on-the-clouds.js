/*
   Jumping on the Clouds
*/

function jumpingOnClouds(c) {
   let j = 0;
   for (let i = 0; i < c.length; i++) {
      if (c[i + 2] === 0) {
         j++;
         i++;
      } else {
         j++;
      }
   }
   return j - 1
}