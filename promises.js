/**
 * Created by yarivkatz on 20/11/2017.
 */


// promises

const myPromise = new Promise(function(resolve, reject) {
    console.log('this function will run right away');
    setTimeout(function(){
        // resolve('hello world');
        reject('error');
    }, 1000);
});

myPromise.then(function success(msg1){
    console.log('this will run after call to resolve');
    console.log(msg1);
}, function error(msg1){
    console.log('this will run after call to reject');
});

const myPromiseSync = new Promise(function(resolve, reject){
    console.log('1');
    resolve('hello from sync promise');
});

console.log('2')

myPromiseSync.then(function success(msg){
    console.log('4')
    console.log(msg)
});

console.log('3')

class Person{
    /**
     * {firstName: '', lastName: ''}
     * @param json
     */
    constructor(json) {
        this.firstName = json.firstName || 'yariv';
        this.lastName = json.lastName || 'katz';
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

const myServerResponse = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({
            firstName: 'shachar',
            lastName: 'student'
        });
    }, 1000)
});

myServerResponse.then(function success(json){
    return new Person(json);
}).then(function success(shachar){
    console.log(shachar.fullName);
});


