import React from 'react';
import style from './style.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({ count: this.state.count +1 });
  }
  render() {
    return <div>
      <p>Couterr is {this.state.count}</p>
      <button onClick={this.handleOnClick}>Increase</button>
    </div>
  }
}
export default Header;