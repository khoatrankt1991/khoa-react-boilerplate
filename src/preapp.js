import { h } from 'react';
import { Provider } from 'preact-redux';
import Router from 'preact-router';
import { Link } from 'preact-router/match';
import AsyncRoute from 'preact-async-route';
// import { createStore } from 'redux'

// function counter(state = 0, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//     default:
//       return state
//   }
// }
// const store = createStore(counter);
import store from './store';
const Loading = () => <div>Loading...</div>
const PreApp = () => (
  <Provider store={store}>
    <div>
    <nav>
        <ul>
          <li>
          <Link activeClassName="active" href="/">Home</Link>
          </li>
          <li>
          <Link activeClassName="active" href="/about">About</Link>
          </li>
          <li>
            <Link activeClassName="active" href="/users">Users</Link>
          </li>
          <li>
            <Link activeClassName="active" href="/users/1">Users Detail</Link>
          </li>
        </ul>
      </nav>
      <Router>
        <AsyncRoute
            path="/"
            getComponent={ () => import('./container/Home').then(module => module.default) }
            loading={Loading}
          />
          <AsyncRoute
            path="/about"
            getComponent={ () => import('./container/AboutUs').then(module => module.default) }
            loading={Loading}
          />
          <AsyncRoute
            path="/users/:id"
            getComponent={ () => import('./container/ProjectDetail').then(module => module.default) }
            loading={Loading}
          />
      </Router>
    </div>
  </Provider>
);

export default PreApp;
