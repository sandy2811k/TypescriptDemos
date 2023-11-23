var Student = /** @class */ (function () {
    function Student(rollno, name) {
        this.rollno = rollno;
        this.name = name;
    }
    return Student;
}());
var s = new Student(1, "Sandesh");
console.log("roll no :" + s.rollno + " name :" + s.name);
