/**
 * Created by yarivkatz on 19/11/2017.
 */



const myFunc = function (message) {
    console.log(message);
}

console.log(sayHello('hello'))

function sayHello(message) {
    console.log(message);
}

myFunc('hello my func');

sayHello('say hello');

const myArray = [1,2,3];

function changeArray(){
    myArray.push(4);
}

function changeArray(arr) {
    arr.push(5);
}

changeArray(myArray);

function callToFunction(cb) {
    cb('hello from call to function')
};

callToFunction(sayHello);

callToFunction(function(message){
    console.log(arguments);
});

sayHello('sdfs');

sayHello.call(null, 'sdfs');

function connectString(){
    // return arguments.join('+');

    let result = [];
    for(let i=0;i<arguments.length; i++) {
        result.push(arguments[i]);
    }
    return result.join('+');
}


console.log(connectString('hello', 'world', 'foo', 'bar'));


function defaultParam(message='hello world') {
    console.log(message);
}

defaultParam();
defaultParam('foo bar');

console.log('default params')

function defaultParam2(message='hello world', msg) {
    console.log(message);
    console.log(msg);
}

defaultParam2(undefined, 'message2');
defaultParam2('messsage1', 'message2');

