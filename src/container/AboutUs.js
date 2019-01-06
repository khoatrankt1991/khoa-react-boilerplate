import React, { lazy, Suspense} from 'react';
const ChildComp2 = lazy(() => import('./ChildComp2'));
import Loadable from "react-loadable";
const Loading = () => <div>Loading....</div>;
const AsyncDetail = Loadable({
  loader: () => import("../components/Header"),
  loading: Loading
});

class AboutUs extends React.Component {
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
        <p>AboutUs page here</p>
        {
          ChildComp !== null ? <ChildComp /> : (<button onClick={this.loadChildComp}>Load Child</button>)
        }
        <Suspense fallback={<div>Loading...</div>}>
          <ChildComp2 />
        </Suspense>
        <AsyncDetail />
      </div>
    );
  }
}

export default AboutUs;