/**
 * Created by yarivkatz on 26/11/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';

export default class HelloWorldComponent extends React.Component{
    static propTypes = {
        message: PropTypes.string.isRequired,
        // cb: PropTypes.func.isRequired
    }

    constructor(props){
        super(props);
        this.alertClicked = this.alertClicked.bind(this);
        this.state = {
            isVisible: true,
            stams: []
        }
    }

    alertClicked(){
        alert(this.props.message);
    }

    toggleVisibility(event){
        // this.setState({
        //     isVisible: false
        // });

        this.setState((oldState) => {
            return {
                isVisible: !oldState.isVisible
            }
        })
    }

    addTextToList(event){
        event.preventDefault();
        const stamString = this.stamInput.value;
        console.log(`${stamString}`);
        this.setState((oldState) => {

            const newStams = oldState.stams.splice(0);
            newStams.push(stamString);

            return {
                stams: newStams
            }

        })
    }

    render() {
        console.log('this will be called when state changed');
        const message = this.props.message;
        const isVisible = this.state.isVisible;

        let extraClass = '';
        if(!isVisible) extraClass = 'hidden';

        // return React.createElement('h1', null, 'Hello world from react component');
        return (
            <div>
                {/*
                <h1 className={extraClass}></h1>
                */}

                {
                    isVisible ? <h1>{message}<span>Tom's span</span></h1> : null
                }

                {/*
                <button onClick={this.alertClicked.bind(this)} >Alert</button>
                */}
                {
                    /*
                    <button onClick={() => {this.alertClicked();}} >Alert</button>
                     */
                }
                <button onClick={this.alertClicked}>Alert</button>
                <button onClick={this.toggleVisibility.bind(this)}>Toggle Visibility</button>

                <br/>
                <h1>
                    List of text strings
                </h1>
                <form onSubmit={this.addTextToList.bind(this)}>
                    <label>
                        Enter Text:
                    </label>
                    <input type="text" name="stam" ref={(domElementInput) => {this.stamInput = domElementInput}} />
                    <br/>
                    <button type="submit">Submit</button>
                </form>
                <ul>
                    {
                        this.state.stams.map((stamText) => {
                            return <li>{stamText}</li>
                        })
                    }
                </ul>

            </div>
        )
    }
}