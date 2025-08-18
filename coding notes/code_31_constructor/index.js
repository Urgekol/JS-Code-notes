/*  
    construct = a function of the class called when an object
                is created.
*/

class Student{

    constructor(name, age, gpa)
    {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    //a user defined function
    study(){
        console.log(`${this.name} is studying`);
    }
}

const student1 = new Student("SpongeBob", 30, 3.2);
const student2 = new Student("Patrick", 23, 1.5);

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();


console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);
student2.study();