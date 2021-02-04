// task 1

let text = "Five little ducks swimming out one day, over the hills and far away";
function uppercaseTxt(str) {
   let splittedText = str.split(" ");
   let upperCasedText = splittedText.map(function (elem) {
      return elem[0].toUpperCase() + elem.slice(1);
   });
   return upperCasedText.join(" ");
}
