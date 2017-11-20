/**
 * Created by yarivkatz on 19/11/2017.
 */

const myDict = {};
myDict.a = 'hello';
Object.prototype.a = 'world';

console.log(myDict.__proto__ === Object.prototype);

Object.create(Object.prototype);
Object.create(null);

console.log('hasOwnProperty')
console.log(myDict.hasOwnProperty('toString'));

const myDict2 = Object.create(null);

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.fullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

const yariv = new Person('yariv', 'katz');

const shai = new Person('shai', '');

function Student(firstName, lastName, grade) {
    Person.call(this, firstName, lastName);
    this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.fullName = function(){
    return `from student: ${Student.prototype.__proto__.fullName.call(this)}`;
}

const newStudent = new Student('new', 'student', 100);
console.log(newStudent.fullName());

