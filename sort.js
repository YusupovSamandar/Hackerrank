function sortedGroup() {
   let arr = ["otabkek", "maftuna", "mohinur", "muqaddam", "abdushukur"];
   arr.sort()
   return arr;
}
function reversedGroup() {
   let arr = ["otabkek", "maftuna", "mohinur", "muqaddam", "abdushukur"];
   arr.sort().reverse()
   return arr;
}
function sortedByLength() {
   let arr = ["otabkek", "maftuna", "mohinur", "sfgghgedwdhhtgrfdwgj", "abdushukur", "muqaddam"];
   arr.sort(function (a, b) { return a.length - b.length })
   return a;
}