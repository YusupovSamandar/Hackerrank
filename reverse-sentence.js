let sentence = "Five little ducks swimming out one day, over the hills and far away";
function reverseSentence(sentence) {
   let result = sentence.split(" ").reverse().join(" ");
   return result;
}

reverseSentence(sentence)