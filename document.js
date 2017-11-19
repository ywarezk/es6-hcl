/**
 * Created by yarivkatz on 19/11/2017.
 */


console.log('DOM');

// selectors

document.getElementsByTagName('h1');

document.getElementsByClassName('title');

document.getElementById('hcl');

// change the dom

const h1 = document.getElementById('hcl');
// h1.hidden = true;
h1.style.backgroundColor = 'red'
h1.onclick = function(){
    alert('clicked me');
}


const form = document.getElementsByTagName('form')[0];
// form.addEventListener('click', function(event){
//     console.log('form1');
//     event.preventDefault();
//     event.stopPropagation();
// });
//
// form.addEventListener('click', function(event){
//     console.log('form2');
//     // event.preventDefault();
//     // event.stopPropagation();
// });

form.addEventListener('submit', function(event){
    event.preventDefault();
})