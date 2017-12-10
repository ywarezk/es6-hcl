/**
 * Created by yarivkatz on 10/12/2017.
 */


import React from 'react';
import {Switch, Route} from 'react-router-dom';
import TodoListComponent from './todo-list.component';
import TaskDetailsComponent from './todo-item.component';
import TodoFormComponent from './todo-form.component';

export default class TodosComponent extends React.Component {
    render() {
        return (
            <div>
                <TodoFormComponent />
                <Switch>
                    <Route exact path="/todos/" component={TodoListComponent} />
                    <Route path="/todos/:id/" component={TaskDetailsComponent} />
                </Switch>
            </div>
        )
    }
}