/**
 * Created by yarivkatz on 19/11/2017.
 */


const myStr1 = 'hello world';
const myStr2 = "foo bar";
const myStr3 = `
    ${myStr1} ${1 + 1}
    multiline string
    hello world
    foo bar
    wat
`;
console.log(myStr3);


console.log(myStr1[2]);

console.log('method');

console.log(myStr3.indexOf("hello"));

console.log(myStr3.split(' '));


console.log('playing with number');

let myNumber = 10;
console.log(myNumber.toString());

let myFloat = parseFloat("23.5");

let myNan = NaN;

// logical operators

if ("10" == 10) {
    console.log('== comparing values')
}

if ("10" === 10) {
    console.log('will not enter')
} else {
    console.log('compaing types')
}

if ("10" !== 10){
    console.log('comparing types with not')
}

if ("10" != 10) {
    console.log('comparing only values')
}



