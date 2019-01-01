import './app.scss';
console.log('bundle here11111');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { getName, getAsync } from './math';
console.log(getName(2));
getAsync();


ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;
    ReactDOM.render(<NextApp />, document.getElementById('app'));
  })
}
