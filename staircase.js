/*
   Staircase
*/

// 1
function staircase(n) {
   let output = "";
   for (let i = 1; i <= n; i++) {
      output += " ".repeat(n - i);
      output += "#".repeat(i);
      console.log(output);
      output = ""
   }
}

// 2
function staircase(n) {
   for (let i = 1; i <= n; i++) {
      console.log("#".repeat(i).padStart(n));
   }
}