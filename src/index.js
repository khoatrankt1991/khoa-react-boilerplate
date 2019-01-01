import './app.scss';
console.log('bundle here11111');
import React from 'react';
import ReactDOM from 'react-dom';
import { getName, getAsync } from './math';
console.log(getName(2));
getAsync();
const App = () => (<div>App React</div>);

ReactDOM.render(<App />, document.getElementById('app'));