/**
 * Created by yarivkatz on 10/12/2017.
 */


import React from 'react';
import ListComponent from './list.component';
import FormComponent from './form.component';

export default class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasksArray: [
                {title: 'shopping', description: 'buy soya milk'}
            ]
        }
    }

    addTask(task) {
        this.setState(function(oldState) {
            const newTasks = oldState.tasksArray.slice(0);
            newTasks.push(task);
            return {
                tasksArray: newTasks
            }
        })
    }

    render() {
        return (
            <div>
                <h1>hello from parent component</h1>
                <FormComponent cb={this.addTask.bind(this)} />
                <ListComponent tasks={this.state.tasksArray} />
            </div>
        )
    }
}