//User
// create employee class accept id .name, basic salary in constructor ,
// calculate gross salary (hra,ta,da,pf) 
// calculate all allowance write method 
var Employee = /** @class */ (function () {
    function Employee(empid, name, salary) {
        this.empid = empid;
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.calculateSalary = function () {
        this.hra = this.salary * 0.40;
        this.da = this.salary * 0.20;
        this.ta = this.salary * 0.10;
        this.pf = this.salary * 0.12;
        this.grossSalary = this.salary + this.hra + this.da + this.ta - this.pf;
    };
    Employee.prototype.print = function () {
        console.log(this.empid);
        console.log(this.name);
        console.log(this.grossSalary);
    };
    return Employee;
}());
var emp = new Employee(1, "Sandesh", 80000);
emp.calculateSalary();
emp.print();
