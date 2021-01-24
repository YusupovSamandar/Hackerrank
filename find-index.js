let arr = ["Otabek", "Maftuna", "Mohinur", "Abdushukur", "Shaxbozbek", "Shamsiqamarbonu", "Odiljon", "Marifatkhon", "Abdulloh", "Sherzod", "Akmal"];
let akmalIndex = arr.findIndex(function (elem) {
   if (elem === "Akmal") {
      return true
   } else {
      return false
   }
});
arr[akmalIndex] = "Afandi"
arr;