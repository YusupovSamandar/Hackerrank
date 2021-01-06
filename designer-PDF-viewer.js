/*
   Designer PDF Viewer
*/

function designerPdfViewer(h, word) {
   let heights = [];
   let alphabetKeys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
   let splittedWord = word.split("");
   splittedWord.forEach((letter) => {
      let letterIndex = alphabetKeys.indexOf(letter);
      heights.push(h[letterIndex]);
   });
   let maxHeight = Math.max(...heights);
   return word.length * maxHeight
}