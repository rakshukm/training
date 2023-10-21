const marks =(prompt("Enter the student's marks:"));


let grade;

if (marks >= 80 && marks <= 100) {
    grade = 'Distinction';
} else if (marks >= 60 && marks < 80) {
    grade = 'First Class';
} else if (marks >= 50 && marks < 60) {
    grade = 'Second Class';
} else if (marks >= 35 && marks < 50) {
    grade = 'Pass';
} else {
    grade = 'FAIL';
}


console.log(`The student's grade is: ${grade}`);