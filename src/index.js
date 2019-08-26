import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';



 // document.createElement, VirtualDom

// <div class="red">
//   <a href="#">About</a>
// </div>
//React.createElement("div", {className: "red"}, React.createElement("a", {href: "#"}, "About"))



ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.createPortal(<div>Hello team!</div>, document.getElementById('root2'));











// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();