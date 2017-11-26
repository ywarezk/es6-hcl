/**
 * Created by yarivkatz on 26/11/2017.
 */


class Person {
    constructor(firstName = 'Yariv', lastName = 'Katz') {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    wat(){
        console.log('wat');
    }

    sayHello(){
        console.log(`hello from ${this.firstName}`);
    }
}