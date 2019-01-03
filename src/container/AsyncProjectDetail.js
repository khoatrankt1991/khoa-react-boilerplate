import React from 'react';

class AsyncProductDetail extends React.Component {
  state = {
    AComponent: null
  }
  componentWillMount() {
    import('./ProjectDetail').then(AComponent => this.setState({ AComponent }));
  }
  render() {
    let {AComponent} = this.state;
    if (!AComponent) {
      return <div>Loading...</div>
    } else {
      return <AComponent />
    }
  }
}
export default AsyncProductDetail;