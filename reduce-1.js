let arr = ["Otabek", "Maftuna", "Mohinur", "Abdushukur", "Shaxbozbek", "Shamsiqamarbonu", "Odiljon", "Marifatkhon", "Abdulloh", "Sherzod", "Akmal"];
let averageLength = arr.reduce(function (sum, elem) {
   sum = elem.length + sum;
   return sum;
}, 0);
Math.round(averageLength / arr.length);