// task 1

let text = "Five little ducks swimming out one day, over the hills and far away";
function uppercaseTxt(str) {
   let splittedText = str.split(" ");
   let upperCasedText = splittedText.map(function (elem) {
      return elem[0].toUpperCase() + elem.slice(1);
   });
   return upperCasedText.join(" ");
}
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

let titleOnly = newsList.map(function (elem) {
   return elem.title
});