/*
   Mars Exploration
*/

function marsExploration(s) {
   var sos = [];
   for (var i = 0, charsLength = s.length; i < charsLength; i += 3) {
      sos.push(s.substring(i, i + 3));
   }
   let res = 0;
   sos.forEach((perSos) => {
      let char = perSos.split("");
      if (char[0] !== "S") {
         res++;
      }
      if (char[1] !== "O") {
         res++;
      }
      if (char[2] !== "S") {
         res++
      }
   });
   return res;
}