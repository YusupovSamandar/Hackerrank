/*
   Grading Students
*/

function gradingStudents(grades) {
   return grades.map((grade) => {
      if (grade > 37) {
         let r = grade % 5;
         if (r === 3 || r === 4) {
            grade += 5 - r;
         }
      }
      return grade
   })
}
