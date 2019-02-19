import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import KNavBars from './components/navbars';
import Loadable from "react-loadable";
const Loading = () => <div>Loading....</div>;
const AsyncHome = Loadable({
  loader: () => import("./container/Home"),
  loading: Loading
});
const AsyncAboutUs = Loadable({
  loader: () => import("./container/AboutUs"),
  loading: Loading
});
const AsyncUser = Loadable({
  loader: () => import("./container/User"),
  loading: Loading
});
const AsyncProductDetaul = Loadable({
  loader: () => import("./container/ProjectDetail"),
  loading: Loading
});
const AsyncBootstrapSwagger = Loadable({
  loader: () => import("./container/BootstrapSwagger"),
  loading: Loading
});
const items = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/users', name: 'Users' },
  { path: '/users/1', name: 'Users1' },
  { path: '/bootstraps', name: 'Bootstraps' }
]
const App = () => (
  <Provider store={store}>
    <Router>
      <div>
      <KNavBars items={items} />
      <div style={{ height: '5rem' }} />
      <Route path="/" exact component={AsyncHome}></Route>
      <Route path="/about" component={AsyncAboutUs}></Route>
      <Route path="/users" exact={true} component={AsyncUser}></Route>
      <Route path="/users/:id" exact={true} component={AsyncProductDetaul}></Route>
      <Route path="/bootstraps" exact={true} component={AsyncBootstrapSwagger}></Route>
      </div>
    </Router>
  </Provider>
);
export default App;