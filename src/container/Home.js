import React, { lazy, Suspense} from 'react';
const ChildComp2 = lazy(() => import('./ChildComp2'));
class Home extends React.Component {
  state = {
    childComp: null
  }
  loadChildComp = () => {
    import('./ChildComp').then(mod => this.setState({ childComp: mod.default }));
  }
  render() {
    const { childComp: ChildComp }= this.state;
    return (
      <div>
        <p>Home page here</p>
        {
          ChildComp !== null ? <ChildComp /> : (<button onClick={this.loadChildComp}>Load Child</button>)
        }
        <Suspense fallback={<div>Loading...</div>}>
          <ChildComp2 />
        </Suspense>
      </div>
    );
  }
}

export default Home;