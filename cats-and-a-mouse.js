/*
   Cats and a Mouse
*/

function catAndMouse(x, y, z) {
   let catA = Math.abs(x - z);
   let catB = Math.abs(y - z);

   if (catA > catB) {
      return "Cat B";
   } else if (catA < catB) {
      return "Cat A";
   } else {
      return "Mouse C";
   }
}