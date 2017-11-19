/**
 * Created by yarivkatz on 19/11/2017.
 */


console.log('window');


//localstorage

localStorage.setItem('foo', 'bar');
localStorage.getItem('foo');

// setTimeout

const myTimeout = setTimeout(function(){
    console.log('hello timeout');
}, 1000);

// clearTimeout(myTimeout);

// alert('hello!');

window.myName = 'Yariv Katz';
