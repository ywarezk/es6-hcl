/**
 * Created by yarivkatz on 19/11/2017.
 */

function sayHello() {
    'use strict';
    console.log(this === window);
    console.log(this);
    console.log(this.b);
}




const myObj = {'a': sayHello, 'b': 'hello'};
myObj['a']();

sayHello.call(myObj);
sayHello.call({b: 'foo bar'}, 'hello', 'wat', true);
sayHello.apply({b: true}, [1,2,3]);

console.log('bind');

const sayHello2 = sayHello.bind({b: [1,2,3]});
sayHello2.call(myObj);

const myArray = [sayHello, 1, 2, true];
myArray[0]();



// lambda functions

console.log('lambda function');

const myLambda = () => {
    console.log(this);
}

myLambda();

// const myObj2 = {'a': () => {}}

