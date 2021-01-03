/*
   Migratory Birds
*/

function migratoryBirds(arr) {
   let map = {};
   let maxCount = 0;
   let output = [];
   for (let i = 0; i < arr.length; i++) {
      let el = arr[i];
      if (!map[el]) {
         map[el] = 1;
      } else {
         map[el]++;
      }

      if (map[el] > maxCount) {
         maxCount = map[el];
      }
   }

   for (let j = 0; j < arr.length; j++) {
      if (map[arr[j]] == maxCount) {
         output.push(arr[j]);
      }
   }

   let res = Math.min(...output);

   return res;
}