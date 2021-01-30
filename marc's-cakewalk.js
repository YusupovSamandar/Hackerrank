/*
   Marc's Cakewalk
*/

function marcsCakewalk(calorie) {
   let miles = 0;

   calorie.sort((a, b) => b - a);

   for (let i = 0; i < calorie.length; i++) {
      miles += (2 ** i) * calorie[i];
   }

   return miles;
}