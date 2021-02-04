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
/* 5 - 1 task*/
let arr = ["Otabek", "Tom", "Maftuna", "Mohinur", "Abdushukur", "Shaxbozbek", "Shamsiqamarbonu", "Odiljon", "Marifatkhon", "Abdulloh", "Sherzod", "Akmal"];
let sorted = arr.sort(function (a, b) {
   return b.length - a.length;
})
let max = sorted[4];
max;

let newsList = [
   {
      dateTime: "19:00PM 2020/12/20",
      title: "Breaking news in UK",
      detail: "Lorem ipsum, lotte merc london foo bar, ...",
      rate: 9
   },
   {
      dateTime: "20:20 2020/12/12",
      title: "sport new Barca won the UEFA",
      detail: "Lorem ipsum, lotte merc london foo bar, ...",
      rate: 10
   },
   {
      dateTime: "11:15PM 2020/05/15",
      title: "Barca vs RM 5:0",
      detail: "Lorem ipsum, lotte merc london foo bar, ...",
      rate: 4
   },
   {
      dateTime: "08:00PM 2019/01/08",
      title: "Lionel Messi is visiting Uzbekistan",
      detail: "Lorem ipsum, lotte merc london foo bar, ...",
      rate: 5
   }
];
function sortedByRate(data) {
   return data.sort(function (a, b) {
      return a.rate - b.rate;
   });
}

function filterBarca(data) {
   return data.filter(function (elem) {
      if (elem.title >= "Barca") {
         return true;
      } else {
         return false;
      }
   })
}