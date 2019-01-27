import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export default class KNavs extends React.Component {
  render() {
    const { items } = this.props;

    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Link className="navbar-brand" to='/'>
          <img src={require('../../assets/img/favicon-32x32.png')} alt="K Framework" />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {items && items.map((e, i) => (<Link key={i} className="nav-link" to={e.path}>{e.name}</Link>))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
