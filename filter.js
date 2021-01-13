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

function findMin() {
   let min = arr[0];
   arr.forEach(function (elem) {
      if (elem < min) {
         min = elem;
      }
   });
}
filterAct([12, 45, 76, 80, 103, 10, 7]);