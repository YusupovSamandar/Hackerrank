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
filterAct([12, 45, 76, 80, 103, 10, 7]);