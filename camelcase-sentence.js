let text = "Five little ducks swimming out one day, over the hills and far away";
function sentense(sentense) {
   let splittedText = sentense.split(" ");
   let upperCasedText = splittedText.map(function (elem) {
      return elem[0].toUpperCase() + elem.slice(1);
   });
   upperCasedText.join(" ");
}

sentense(text);