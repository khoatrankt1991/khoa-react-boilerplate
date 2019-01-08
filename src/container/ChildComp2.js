import React from 'react';

const ChildComp2 = () => (
  <div>
    <p>Lazy Load By Using Suspend lazy from react 16.6</p>
    <p>Lazy Load By Using Suspend lazy from react 16.6</p>
    <p>Lazy Load By Using Suspend lazy from react 16.6</p>
    <p>Lazy Load By Using Suspend lazy from react 16.6</p>
    <p>Lazy Load By Using Suspend lazy from react 16.6</p>
    <img src={require('../assets/img/about.jpg')} alt='Load Image' />
  </div>
)

export default ChildComp2;