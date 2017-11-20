/**
 * Created by yarivkatz on 20/11/2017.
 */


// XMLHttpRequest get all tasks

const getAllTasksReq = new XMLHttpRequest();
getAllTasksReq.open('GET', 'https://nztodo.herokuapp.com/api/task/?format=json');
// getAllTasksReq.setRequestHeader('Content-Type', 'application/json');
getAllTasksReq.addEventListener('load', function(){
    const allTasks = JSON.parse(this.responseText);
    console.log(allTasks);
});
getAllTasksReq.send();


const headers = new Headers();
headers.set('Content-Type', 'application/json');
fetch('https://nztodo.herokuapp.com/api/task/8975/?format=json', {
    method: 'GET',
    headers: headers
}).then((res) => {
    res.json().then(function(task){
        console.log('single task');
        console.log(task);
    });
})

// const getAllTasksReq = new XMLHttpRequest();
// getAllTasksReq.open('GET', 'https://nztodo.herokuapp.com/api/task/?format=json');
// // getAllTasksReq.setRequestHeader('Content-Type', 'application/json');
// getAllTasksReq.addEventListener('load', () => {
//     const allTasks = JSON.parse(this.responseText);
//     console.log(allTasks);
// });
// getAllTasksReq.send();

fetch('https://nztodo.herokuapp.com/api/task/', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
        title: 'hcl first task',
        description: 'hcl first task',
        group: 'yariv katz',
        when: (new Date()).toISOString()
    })
}).then(function(res) {
    if (res.status === 201){
        res.json().then(function(task) {
            console.log('created task');
            console.log(task);
        });
    }
})