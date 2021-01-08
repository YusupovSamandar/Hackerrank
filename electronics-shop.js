/*
   Electronics Shop
*/

function getMoneySpent(keyboards, drives, b) {
   let sums = keyboards.reduce((acc, keyboard) => {
      drives.forEach((drive) => {
         acc.push(keyboard + drive);
      });
      return acc;
   }, []).filter((sum) => {
      if (sum <= b) {
         return true;
      } else {
         return false;
      }
   });
   if (sums.length > 0) {
      return Math.max(...sums);
   } else {
      return -1
   }
}