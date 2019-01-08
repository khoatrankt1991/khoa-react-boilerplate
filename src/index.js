import './app.scss';
console.log('bundle here11111');
// import React from 'react';
// import ReactDOM from 'react-dom';
import { h, render } from 'react';
import App from './preapp';
import { getName, getAsync } from './math';
console.log(getName(2));
getAsync();

render(<App />, document.getElementById('app'));
// render(<App />, document.getElementById('app'));

// if (module.hot) {
//   module.hot.accept('./app', () => {
//     const NextApp = require('./app').default;
//     ReactDOM.render(<NextApp />, document.getElementById('app'));
//   })
// }
