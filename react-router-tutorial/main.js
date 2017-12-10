/**
 * Created by yarivkatz on 26/11/2017.
 */


import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, BrowserRouter} from 'react-router-dom';
import AppComponent from './app.component';

// class HelloComponent extends React.Component {
//     render() {
//         return <h1>Hello router</h1>
//     }
// }

ReactDOM.render(<HashRouter><AppComponent/></HashRouter>, document.getElementById('container'));