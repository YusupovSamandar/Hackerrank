/*
   Filter
*/
function filterAct(arr) {
   arr.filter(function (value, indx) {
      if (value % 5 === 0) {
         console.log(value, indx);
      } else {
         return false;
      }
   })
}

function findMin(arr) {
   let min = arr[0];
   arr.forEach(function (elem) {
      if (elem < min) {
         min = elem;
      }
   });
}

function calculateSum(arr) {
   let sum = 0;
   arr.forEach(function (elem, indx) {
      if (indx % 2 === 1) {
         for (i = 0; i < arr.length; i++) {
            sum += elem;
         }
      }
   })
}

filterAct([12, 45, 76, 80, 103, 10, 7]);