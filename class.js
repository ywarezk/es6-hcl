/**
 * Created by yarivkatz on 19/11/2017.
 */


class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = 32;
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    birthday() {
        setTimeout(() => {
            // console.log(this === global)
            this.age++;
        }, 1000);
    }
}

class Student extends Person {
    constructor(firstName, lastName, grade) {
        super(firstName, lastName);
        this.grade = grade;
    }

    fullName() {
        const message = super.fullName();
        return `${message} ${this.grade}`;
    }

    static getNameOfClass() {
        return 'Student';
    }

    get fullNameAndGrade() {
        return `${this.fullName()} ${this.grade}`;
    }
}

const yariv = new Person('yariv', 'katz');
yariv.birthday();
setTimeout(function(){
    console.log(yariv.age);
}, 2000);


const student = new Student('new', 'student', 100);
console.log(Student.getNameOfClass());
console.log(student.fullNameAndGrade);
