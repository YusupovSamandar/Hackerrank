/*
   Filter Numbers
*/
function filterAct(arr) {
   arr.filter(function (value, indx) {
      if (value % 5 === 0) {
         console.log(value, indx);
      } else {
         return false;
      }
   })
}

function findMin(arr) {
   let min = arr[0];
   arr.forEach(function (elem) {
      if (elem < min) {
         min = elem;
      }
   });
}

function calculateSum(arr) {
   let sum = 0;
   arr.forEach(function (elem, indx) {
      if (indx % 2 === 1) {
         for (i = 0; i < arr.length; i++) {
            sum += elem;
         }
      }
   })
}

filterAct([12, 45, 76, 80, 103, 10, 7]);
findMin([12, 45, 76, 80, 103, 10, 7]);
calculateSum([12, 45, 76, 80, 103, 10, 7]);


/*
   Filter String
*/


function filterLengthBy7(arr) {
   let newArr = arr.filter(function (elem, indx) {
      if (elem.length <= 7) {
         return true;
      } else {
         return false;
      }
   });
}

filterLengthBy7(["Maftuna", "Otabek", "Samandar", "Muqaddam", "Mohinur", "Abdushukur", "Angela", "David"]);

function vowelFilter(text) {
   let splittedText = text.split("")
   return splittedText.filter(function (elem) {
      if (elem === "a" || elem === "e" || elem === "i" || elem === "o" || elem === "u") {
         return true;
      } else {
         return false;
      }
   });
}
vowelFilter("Five little ducks swimming out one day, over the hills and far away");

function consonantFilter(text) {
   return splittedText.filter(function (elem) {
      if (elem === "a" || elem === "e" || elem === "i" || elem === "o" || elem === "u" || elem === " ") {
         return false;
      } else {
         return true;
      }
   });
}

consonantFilter("Five little ducks swimming out one day, over the hills and far away");


function filterByRate(data) {
   return data.filter((elem) => (elem.rate > 5) ? true : false).map((elem) => ({
      title: elem.title,
      detail: elem.detail
   }));
}