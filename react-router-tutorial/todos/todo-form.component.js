/**
 * Created by yarivkatz on 10/12/2017.
 */


import React from 'react';

export default class TodoFormComponent extends React.Component {
    render () {
        return (
            <form>
                <label>title</label>
                <input placeholder="title"/>
            </form>
        )
    }
}
