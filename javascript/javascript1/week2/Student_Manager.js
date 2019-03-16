const class04Students = ["Lisa", "Eve", "Lukas", "Daniel", "Trevor"];
function addStudentToClass (studentName) {
    if (studentName === "") {
        console.log ("Student name field should be filled in");
    }    
    else if (class04Students.length >= 6 && studentName !== "Queen") {
        console.log("Cannot add more students to class 04");
    }
    else if (class04Students.includes(studentName)) {
        console.log("Student " + studentName + " is already in the class");
    }
    else {
        class04Students.push(studentName);
    }
}
    
addStudentToClass("");
addStudentToClass("Trevor");
addStudentToClass("Diana");
addStudentToClass("Kate");
addStudentToClass("Queen");
console.log(class04Students);

function getNumberOfStudents() {
    return class04Students.length;
}
console.log(getNumberOfStudents());   
    
