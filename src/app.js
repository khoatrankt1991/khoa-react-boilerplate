import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
// const Index = () => <h2>Home</h2>;
// const About = () => <h2>About</h2>;
// const Users = () => <h2>Users</h2>;
// const Users1 = () => <h2>Users1</h2>;
const App = () => (
  <Provider store={store}>
    <Router>
      <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/users/1">Users1</Link>
          </li>
        </ul>
      </nav>
      {/* <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/users/" exact component={Users} />
      <Route path="/users/:id" exact component={Users1} /> */}
      <Route path="/" exact component={AsyncHome}></Route>
      <Route path="/about" component={AsyncAboutUs}></Route>
      <Route path="/users" exact={true} component={AsyncUser}></Route>
      <Route path="/users/:id" exact={true} component={AsyncProductDetaul}></Route>
      </div>
    </Router>
  </Provider>
);
export default App;