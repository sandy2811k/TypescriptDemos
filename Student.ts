// Create class student accept rollnumber,name,3 subject marks .
// Calculate total marks  and percentage and display it


class Student
{
    rollnumber:number;
    name:string;
    subject1:number;
    subject2:number;
    subject3:number;
    totalMarks:number;
    percentage:number;



   constructor(rollnumber,name,subject1,subject2,subject3)
   {
    this.rollnumber=rollnumber;
    this.name=name;
    this.subject1=subject1;
    this.subject2=subject2;
    this.subject3=subject3;

   }

   CalculateTotalMarks()
   {
    this.totalMarks=this.subject1+this.subject2+this.subject3;
   }

   CalculatePersentage()
   {
    this.percentage=(this.totalMarks/(3*100))*100;
   }

   print()
    {
        console.log(this.rollnumber);
        console.log(this.name);
        console.log(this.totalMarks);
        console.log(this.percentage);
    }

}

const stud= new Student(1,"Raj",70,80,90);
stud.CalculateTotalMarks();
stud.CalculatePersentage();
stud.print();

