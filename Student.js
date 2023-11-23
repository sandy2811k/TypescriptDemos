var Student = /** @class */ (function () {
    function Student(rollnumber, name, subject1, subject2, subject3) {
        this.rollnumber = rollnumber;
        this.name = name;
        this.subject1 = subject1;
        this.subject2 = subject2;
        this.subject3 = subject3;
    }
    Student.prototype.CalculateTotalMarks = function () {
        this.totalMarks = this.subject1 + this.subject2 + this.subject3;
    };
    Student.prototype.CalculatePersentage = function () {
        this.percentage = (this.totalMarks / (3 * 100)) * 100;
    };
    Student.prototype.print = function () {
        console.log(this.rollnumber);
        console.log(this.name);
        console.log(this.totalMarks);
        console.log(this.percentage);
    };
    return Student;
}());
var stud = new Student(1, "Raj", 70, 80, 90);
stud.CalculateTotalMarks();
stud.CalculatePersentage();
stud.print();
