import React from 'react';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Header />
  </Provider>
);
export default App;