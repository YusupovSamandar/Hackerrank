/*
   Angry Professor
*/

function angryProfessor(k, a) {
   let inClass = 0;
   let arrivalTime;

   a.forEach((time) => {
      if (time <= 0) {
         inClass++;
      }
   });

   if (inClass >= k) {
      return "NO";
   } else {
      return "YES";
   }
}

