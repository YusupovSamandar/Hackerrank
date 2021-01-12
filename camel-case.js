/*
   CamelCase
*/

function camelcase(s) {
   function isUpper(str) {
      return !/[a-z]/.test(str) && /[A-Z]/.test(str);
   }
   return s.split("").reduce((words, letter) => {
      if (isUpper(letter)) {
         words++
      }
      return words;
   }, 1);
}