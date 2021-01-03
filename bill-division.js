/*
   Bill Division
*/

function bonAppetit(bill, k, b) {
   bill.splice(k, 1);
   let result = bill.reduce((r, v) => r + v, 0) / 2;
   if (b === result) {
      console.log("Bon Appetit");
   } else {
      console.log(Math.abs(b - result));
   }
}