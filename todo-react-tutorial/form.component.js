/**
 * Created by yarivkatz on 10/12/2017.
 */


import React from 'react';
import PropTypes from 'prop-types';

export default class FormComponent extends React.Component {
    static propTypes = {
        cb: PropTypes.func.isRequired
    }

    formSubmitted(event) {
        event.preventDefault();
        const title = this.titleInput.value;
        const description = this.descriptionInput.value;
        this.props.cb({title: title, description: description});
    }

    render() {
        return (
            <form onSubmit={this.formSubmitted.bind(this)}>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" ref={(inputDomElement) => {this.titleInput = inputDomElement}} />
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" name="description" ref={(inputDomElement) => {this.descriptionInput = inputDomElement}} />
                </div>
                <div>
                    <button type="submit">
                        submit
                    </button>
                </div>
            </form>
        )
    }

}