/*
   Cut the sticks
*/

function cutTheSticks(arr) {
   let result = [];
   while (arr.length != 0) {
      result.push(arr.length);
      let min = Math.min(...arr);
      for (let i = 0; i < arr.length; i++) {
         let foo = arr[i] - min;
         if (foo === 0) {
            arr.splice(i, 1);
            i--;
         } else {
            arr[i] = foo;
         }
      }
   }
   return result;
}