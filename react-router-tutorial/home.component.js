/**
 * Created by yarivkatz on 10/12/2017.
 */

import React from 'react';

export default class HomeComponent extends React.Component {
    navigateToAbout() {
        this.props.history.push('/about/');
    }

    render() {
        return (
            <div>
                <h1>Welcome to the homepage</h1>
                <button onClick={this.navigateToAbout.bind(this)}>Navigate to about</button>
            </div>
        )

    }
}