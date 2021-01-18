/*
   Find Average length
*/

let arr = ["Otabek", "Maftuna", "Mohinur", "Abdushukur", "Shaxbozbek", "Shamsiqamarbonu", "Odiljon", "Marifatkhon", "Abdulloh", "Sherzod", "Akmal"];

function findAvarageLength(arr) {
   let averageLength = arr.reduce(function (sum, elem) {
      sum = elem.length + sum;
      return sum;
   }, 0);
   Math.round(averageLength / arr.length);
}

findAvarageLength(arr);