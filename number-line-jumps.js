/*
   Number Line Jumps
*/

function kangaroo(x1, v1, x2, v2) {
   let y = 0;
   while (y <= 10000) {
      x1 += v1;
      x2 += v2;
      if (x1 === x2) {
         return "YES";
      }
      y++;
   }
   return "NO"
}