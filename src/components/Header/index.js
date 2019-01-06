import React from 'react';
import style from './style.scss';

class Header extends React.Component {
  state = {
    count: 0
  }

  handleOnClick = () => {
    this.setState({ count: this.state.count +1 });
  }
  render() {
    return <div className={style.container}>
      <p>Couterr is {this.state.count}</p>
      <button onClick={this.handleOnClick}>Increase</button>
    </div>
  }
}
export default Header;