// Set testGrade to get the loop started
var testGrade = 101;

// Stert the loop
while (testGrade >= 101) {

//  Collect the score to be translated into a grade
testGrade = prompt("What is your grade?");  // 1.

// Test for 90 to 100 and an A.
  if (testGrade >= 90 && testGrade <= 100) {
    letterGrade = "A";
    alert("Your grade is " + letterGrade);
  }

// Test for 80 to 89 and a B.
else if (testGrade >= 80 && testGrade <= 89) {
    letterGrade = "B";
    alert("Your grade is " + letterGrade);
  }

// Test for 70 to 79 and a C.
else if (testGrade >= 70 && testGrade <= 79) {
    letterGrade = "C";
    alert("Your grade is " + letterGrade);
  }
  
// Test for 70 to 79 and a D.
  else if (testGrade >= 60 && testGrade <= 69) {
    letterGrade = "D";
    alert("Your grade is " + letterGrade);
  }
  
// Test for 60 and below and an F.
  else if (testGrade < 60) {
    letterGrade = "F";
    alert("Your grade is " + letterGrade);
  }

// Test for over 100 and not a grade
  else  {
    alert("That is not a grade")
  }
}
