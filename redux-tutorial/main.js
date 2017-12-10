/**
 * Created by yarivkatz on 10/12/2017.
 */


import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import PropTypes from 'prop-types';
import {store, grabTasksFromServer} from './redux';

@connect(
    function(state) {
        const tasks = state.todo.tasks;
        return {
            todoListProp: tasks
        }
    },
    function(dispatch) {
        return {
            grabTasks: function() {
                dispatch(grabTasksFromServer())
            }
        }
    }
)
export default class TaskListComponent extends React.Component {
    static propTypes = {
        todoListProp: PropTypes.array.isRequired,
        grabTasks: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.grabTasks();
    }

    render() {
        const tasks = this.props.todoListProp;
        const grabTasks = this.props.grabTasks;
        return (
            <ul>
                {
                    tasks.map((singleTask) => {
                        return <li>{singleTask.title}</li>
                    })
                }
            </ul>
        )
    }
}

ReactDOM.render(<Provider store={store}><TaskListComponent/></Provider>, document.getElementById('container'));