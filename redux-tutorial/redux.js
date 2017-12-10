/**
 * Created by yarivkatz on 26/11/2017.
 */

import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

export const ADD_TASK = 'ADD_TASK';

// this is a sample action

// const sampleAction = {
//     type: ADD_TASK,
//     payload: {
//         title: 'stam task',
//         description: 'task description'
//     }
// };

// this is action creator

export function addTask(task) {
    return {
        type: 'ADD_TASK',
        payload: task
    }
}

export function grabTasksFromServer() {
    return function(dispatch) {

        // setTimeout(() => {
        //     dispatch({
        //         type: 'ADD_TASK',
        //         payload: {title: 'async', description: 'task'}
        //     });
        // }, 2000)

        fetch('https://nztodo.herokuapp.com/api/task/?format=json').then((res) => {
            res.json().then((tasks) => {
                dispatch(
                    {type: 'SET_ALL_TASKS', payload: tasks}
                );
            });
        });

    }
}

const initialState = {
    tasks: []
}

/**
 * using the old state
 * and action
 * we need to decide the new state
 * @param state
 * @param action
 */
// function reducer(state = initialState, action) {
//     switch (action.type) {
//         case 'ADD_TASK':
//             // const stateCopy = {...state, tasks: []};
//             const newTasks = state.tasks.splice(0);
//             newTasks.push(action.payload);
//             return {
//                 tasks: newTasks
//             }
//         default:
//             return state;
//     }
// }

export function setLogin(isLoggedIn) {
    return {
        type: 'SET_LOGIN',
        payload: isLoggedIn
    }
}


export function setFirstName(name) {
    return {
        type: 'SET_NAME',
        payload: name
    }
}

const initialUserState = {
    isLoggedIn: false,
    firstName: ''
}

function userReducer(state=initialUserState, action) {
    switch (action.type){
        case 'SET_LOGIN':
            return {
                isLoggedIn: action.payload,
                firstName: state.firstName
            }
        case 'SET_NAME':
            return {
                isLoggedIn: state.isLoggedIn,
                firstName: action.payload
            }
        default:
            return state;
    }
}

const initialTodoState = {
    tasks: []
}

function todoReducer(state=initialTodoState, action) {
    switch (action.type) {
        case 'ADD_TASK':
            // const stateCopy = {...state, tasks: []};
            const newTasks = state.tasks.splice(0);
            newTasks.push(action.payload);
            return {
                tasks: newTasks
            }
        case 'SET_ALL_TASKS':
            return {
                tasks: action.payload
            }
        default:
            return state;
    }
}


export const store = createStore(
    combineReducers({
        user: userReducer,
        todo: todoReducer
    }),
    applyMiddleware(thunk)
);

window.store = store;
// {
//     user: {
//         isLoggedIn: false,
//         firstName: 'Yariv'
//     },
//     todo: {
//         tasks: []
//     }
// }