/**
 * Created by yarivkatz on 10/12/2017.
 */


import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import HomeComponent from './home.component';
import AboutComponent from './about.component';
import ErrorComponent from './error.component';
import TodosComponent from './todos/todos.component';

export default class AppComponent extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" >Home</Link>
                        </li>
                        <li>
                            <Link to="/about/" >About</Link>
                        </li>
                        <li>
                            <Link to="/todos" >todos</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/about" component={AboutComponent} />
                    <Route path="/todos" component={TodosComponent} />
                    <Route exact path="/" component={HomeComponent} />
                    <Route component={ErrorComponent} />
                </Switch>
            </div>
        )
    }

}