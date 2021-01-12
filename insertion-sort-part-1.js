/*
   Insertion Sort - Part 1
*/

function insertionSort1(n, arr) {
   let repNum = arr.slice(0, n - 1);
   let lastNum = arr[n - 1];
   for (let i = (repNum.length - 1); i >= 0; i--) {
      if (repNum[i] > lastNum) {
         repNum.splice(i, 0, repNum[i]);
         console.log(repNum.join(' '));
         repNum = arr.slice(0, n - 1);
      } else {
         repNum.splice(i + 1, 0, lastNum);
         console.log(repNum.join(' '));
         break;
      }
   }

   if (arr[0] > lastNum) {
      repNum.splice(0, 0, lastNum);
      console.log(repNum.join(" "));
   }
}