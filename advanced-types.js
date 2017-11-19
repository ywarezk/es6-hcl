/**
 * Created by yarivkatz on 19/11/2017.
 */


const myArray = [10, true, "hello world"];
myArray.push('foo bar');


console.log(`the second member in array ${myArray[1]}`);

myArray.forEach(function(item, index){
    console.log(`${index} ${item}`);
});

myArray.forEach(function(item){
    console.log(`${item}`);
});

// for(let i=0; i<myArray.length; i++){
//     cb(myArray[i], i);
// }

console.log(`the length of the array is: ${myArray.length}`);

console.log('Dictionary');

const myDict1 = {'hello': 'world', 'foo': 'bar', 'myKey': true, 'hello-hcl-wat': 10};
const myDict2 = {hello: 'world', foo: 'bar', myKey: true};

console.log(`the foo key is: ${myDict1['foo']}`)
console.log(`the foo key is: ${myDict1.foo}`)
// console.log(`the foo key is: ${myDict1.hello-hcl-wat}`)
delete myDict1['hello'];

console.log(Object.keys(myDict1));

let myKeys = Object.keys(myDict1);
for(let i=0; i<myKeys.length; i++){
    console.log(`${myKeys[i]} ${myDict1[myKeys[i]]}`);
}

console.log('SET');

const mySet = new Set([1,2,2,3,3,3]);

for(let i of mySet) {
    console.log(i);
}

Object.prototype.yariv = 'katz';

for(let i in myDict1) {
    console.log(i);
}