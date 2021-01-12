/*
   Insertion Sort - Part 2
*/

function insertionSort2(n, arr) {
   for (var i = 1; i < n; i++) {
      let t = arr[i];
      let m = i;
      for (var j = i - 1; j >= 0; j--) {
         if (arr[j] <= t) {
            break;
         } else {
            arr[m] = arr[j];
            arr[j] = t;
            m--;
         }
      }
      console.log(arr.join(" "));
   }
}