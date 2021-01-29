/*
   Making Anagrams
*/

function makingAnagrams(s1, s2) {
   Array.from(s1).forEach((char) => {
      if (s2.includes(char)) {
         s1 = s1.replace(char, "");
         s2 = s2.replace(char, "")
      }
   });
   return s1.length + s2.length
}