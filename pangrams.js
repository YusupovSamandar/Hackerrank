/*
   Pangrams
*/

function pangrams(s) {
   let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
   let str = s.toLowerCase();
   for (let i = 0; i < alphabet.length; i++) {
      if (!str.includes(alphabet[i])) {
         return "not pangram";
      }
   }

   return "pangram";
}