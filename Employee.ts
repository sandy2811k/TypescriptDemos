
// Create employee class accept id .name, basic salary in constructor ,
// Calculate gross salary (hra,ta,da,pf) 
// Calculate all allowance write method and print it 



interface IEmployee
{
    id:number;
    name:string;
    salary:number;
}

class Employee
{
    empid:number;
    name:string;
    salary:number;
    hra:number;
    ta:number;
    da:number;
    pf:number;
    grossSalary:number;


    constructor(empid,name,salary)
    {
        this.empid=empid;
        this.name=name;
        this.salary=salary;
    }
    calculateSalary()
    {
        this.hra=this.salary*0.40;
        this.da=this.salary*0.20;
        this.ta=this.salary*0.10;
        this.pf=this.salary*0.12;

        this.grossSalary = this.salary+this.hra+this.da+this.ta-this.pf;
    }
    print()
    {
        console.log(this.empid);
        console.log(this.name);
        console.log(this.grossSalary);
    }
}

const emp=new Employee(1,"Sandesh",80000)
emp.calculateSalary();
emp.print();