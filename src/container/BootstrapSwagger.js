import React from 'react';
// import { Container} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FormControl from 'react-bootstrap/FormControl';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import KCarousel from '../components/carousel';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import KCard from '../components/card';
import KMedia from '../components/media';
import Chip from '../components/chip';

const items = [
  {
    src: 'https://picsum.photos/1000/500?image=0',
    alt: 'Slide 1',
    caption: {
      title: 'Slide 1',
      desc: 'Has description'
    }
  },
  {
    src: 'https://picsum.photos/1000/500?image=1',
    alt: 'Slide 2',
    caption: {
      title: 'Slide 1 No desc',
      desc: ''
    }
  },
  {
    src: 'https://picsum.photos/1000/500?image=2',
    alt: 'Slide 3',
    caption: {
      title: 'Slide 3',
      desc: 'Has description'
    }
  },
  {
    src: 'https://picsum.photos/1000/500?image=4',
    alt: 'Slide 4',
    caption: {
      title: 'Slide 4',
      desc: 'Has description'
    }
  }
]
const BootstrapSwagger = () => (<Container>
  <Row>Breadcum</Row>
  <Breadcrumb>
    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
      Library
    </Breadcrumb.Item>
    <Breadcrumb.Item active>Data</Breadcrumb.Item>
  </Breadcrumb>
  <Row>Buttons</Row>
  <ButtonToolbar>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="success">Success</Button>
    <Button variant="warning">Warning</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="info">Info</Button>
    <Button variant="light">Light</Button>
    <Button variant="dark">Dark</Button>
    <Button variant="link">Link</Button>
  </ButtonToolbar>
  <Row>Outline buttons</Row>
  <ButtonToolbar style={{ display: 'flex', justifyContent: 'space-around' }}>
    <Button variant="outline-primary">Primary</Button>
    <Button variant="outline-secondary">Secondary</Button>
    <Button variant="outline-success">Success</Button>
    <Button variant="outline-warning">Warning</Button>
    <Button variant="outline-danger">Danger</Button>
    <Button variant="outline-info">Info</Button>
    <Button variant="outline-light">Light</Button>
    <Button variant="outline-dark">Dark</Button>
  </ButtonToolbar>
  <Row>Carosel</Row>
  <KCarousel items={items}/>
  <Row>NavBarColappse</Row>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Dank memes
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  {[1,2,3,4,5,6,7,8].map((e, i) => <KCard key={i} title={'title' + e} desc={'desc' + e} path={`https://picsum.photos/1000/500?image=${e}`}/>)}
  {[1,2,3,4,5,6,7,8].map((e, i) => <KMedia key={i} title={'title' + e} desc={'desc' + e} path={`https://picsum.photos/1000/500?image=${e}`}/>)}
  <Chip />
  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
</Container>);

export default BootstrapSwagger;