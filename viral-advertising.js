/*
   Viral Advertising
*/

function viralAdvertising(n) {
   let result = 0;
   let people = 5;
   for (let i = 0; i < n; i++) {
      people = Math.floor(people / 2);
      result += people
      people *= 3;
   }
   return result;
}