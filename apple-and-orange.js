/*
   Apple and Orange
*/


function countApplesAndOranges(s, t, a, b, apples, oranges) {
   let countApple = 0;
   let countOrange = 0;
   apples.map((apple) => apple + a)
      .forEach((apple) => {
         if (apple >= s && apple <= t) {
            countApple++;
         }
      });

   oranges.map((orange) => orange + b)
      .forEach((orange) => {
         if (orange >= s && orange <= t) {
            countOrange++;
         }
      });

   console.log(countApple)
   console.log(countOrange)
}