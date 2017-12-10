/**
 * Created by yarivkatz on 10/12/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';

export default class ListComponent extends React.Component {
    static propTypes = {
        tasks: PropTypes.array.isRequired
    }

    /**
     * take the tasks array from the properties
     * transform that array to jsx <li>...</li>
     */
    fromArrayTasksToLi() {
        const tasks = this.props.tasks;
        const arrayoflis = [];
        for (const task of tasks) {
            arrayoflis.push(<li>{task.title}</li>);
        }
        return arrayoflis;
    }

    render() {
        const tasksGrabbedFrom = this.props.tasks;
        return (
            <ul>
                {
                    this.fromArrayTasksToLi()
                }
            </ul>
        )
    }
}