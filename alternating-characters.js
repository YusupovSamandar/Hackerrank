/*
   Alternating Characters
*/

function alternatingCharacters(s) {
   let splittedS = s.split("");
   let tempLetter = splittedS[0];
   let count = 0;
   let filtredArray = splittedS.filter((elem, index) => {
      if (elem !== tempLetter) {
         tempLetter = elem;
         return elem;
      }
   });
   return (s.length - filtredArray.length) - 1;

}