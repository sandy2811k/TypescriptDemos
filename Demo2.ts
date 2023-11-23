interface Istudent
{
    rollno:Number;
    name:String;
}
class Student
{
    rollno:Number;
    name:String;

    constructor(rollno,name)
    {
        this.rollno=rollno;
        this.name=name; 
    } 
}
const s:Istudent=new Student(1,"Sandesh");
console.log("roll no :"+s.rollno+" name :"+s.name);