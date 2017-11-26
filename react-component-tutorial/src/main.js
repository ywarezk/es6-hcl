
import ReactDOM from 'react-dom';
import React from 'react';
import HelloWorldComponent from './hello-world.component';

// ReactDOM.render(React.createElement(HelloWorldComponent), document.getElementById('container'));
//ReactDOM.render(<HelloWorldComponent message={"hello" + " from parent component"} />, document.getElementById('container'));
ReactDOM.render(<HelloWorldComponent message="hello from parent component" />, document.getElementById('container'));

