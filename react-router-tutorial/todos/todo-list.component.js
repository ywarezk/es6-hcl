/**
 * Created by yarivkatz on 10/12/2017.
 */


import React from 'react';
import {Link} from 'react-router-dom';

export default class TodoListComponent extends React.Component {
    render() {
        return (
            <ul>
                <li><Link to="/todos/1/">task1</Link></li>
                <li><Link to="/todos/2/">task2</Link></li>
                <li><Link to="/todos/3/">task3</Link></li>
            </ul>
        )
    }
}