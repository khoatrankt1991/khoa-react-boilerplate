import {h, Component } from 'react';
// const ChildComp2 = lazy(() => import('./ChildComp2'));
// import Loadable from "react-loadable";
// const Loading = () => <div>Loading....</div>;
// const AsyncDetail = Loadable({
//   loader: () => import("../components/Header"),
//   loading: Loading
// });

class AboutUs extends Component {
  state = {
    childComp: null,
    childComp2: null
  }
  loadChildComp = () => {
    import('./ChildComp').then(mod => this.setState({ childComp: mod.default }));
  }
  componentDidMount() {
    import('./ChildComp2').then(mod => this.setState({ childComp2: mod.default }));
  }
  render() {
    const { childComp: ChildComp, childComp2: ChildComp2 }= this.state;
    return (
      <div>
        <p>AboutUs page here</p>
        {
          ChildComp !== null ? <ChildComp /> : (<button onClick={this.loadChildComp}>Load Child</button>)
        }
        {ChildComp2 !== null && <ChildComp2 />}
        {/* <Suspense fallback={<div>Loading...</div>}>
          <ChildComp2 />
        </Suspense> */}
        {/* <AsyncDetail /> */}
      </div>
    );
  }
}

export default AboutUs;