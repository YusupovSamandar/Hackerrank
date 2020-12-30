/*
   Time Conversion
*/

function timeConversion(s) {
   let amPm = s.charAt(8);
   let militaryHour = "";
   let hours = s.substring(0, 2);
   if (amPm === "A") {
      if (hours === "12") {
         militaryHour = "00"
      } else {
         militaryHour = hours;
      }
   } else {
      if (hours === "12") {
         militaryHour = hours;
      } else {
         militaryHour = Number(hours) + 12;
      }
   }

   let res = militaryHour + s.substring(2, 8);

   return res

}