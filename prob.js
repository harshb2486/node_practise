const student = {
    firstname: "John",
    second: "Doe",
    age: 20,
    grade: "A",
};      

function getfullname(student) {
    return student.firstname + " " + student.second;
}
console.log(getfullname(student));