/**
 * Created by yarivkatz on 20/11/2017.
 */


try{
    console.log('try1');
    throw new TypeError('type error from try1')
}
catch(e) {
    console.log(`${e.message} from try 1`)
}
finally {
    console.log('cleaning try1');
}

try{
    console.log('try2');
    throw new EvalError('hello eval error');
}
catch(e) {
    if (e instanceof EvalError) {
        console.log('EvalError');
    }
    else if (e instanceof TypeError){
        console.log('TypeError');
    }
    else {
        console.log('Error');
    }
}

class HclError extends Error{
    constructor(msg) {
        super(msg);
        this.date = new Date();
    }
}


