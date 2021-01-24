/*
   Find Number of Words in a sentence.
*/

let text = "Five little ducks swimming out one day, over the hills and far away";
function findWords(text) {
   let result = text.split(" ").length;
   return result
}

findWords(text)

