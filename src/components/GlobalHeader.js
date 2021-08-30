
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import user_prof from '../profile4.png';
import wishlist from '../wishlist4.png';
import cart from '../cart5.png';
import { Link } from 'react-router-dom';


class GlobalHeader extends React.Component {
    render() {
    return (
    <div >

    <Navbar bg="light" expand="sm">
  <Navbar.Brand href="#">Quality Shop</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Link to="./men"><Nav.Link href="/men" style={{ fontWeight: '700' }}>Men</Nav.Link></Link>
      <Link to="./women"><Nav.Link href="/women"style={{ fontWeight: '700' }}>Women</Nav.Link></Link>
      <NavDropdown title="Kids" id="navbarScrollingDropdown"  style={{ fontWeight: '700' }}>
      <Link to="./boy"> <NavDropdown.Item href="/boy" style={{ fontWeight: '700' }}>Boy</NavDropdown.Item></Link>
      <Link to="./girl"> <NavDropdown.Item href="/girl" style={{ fontWeight: '700' }}>Girl</NavDropdown.Item></Link>
        <NavDropdown.Divider />
        <Link to="./kids"><NavDropdown.Item href="kids"style={{ fontWeight: '700' }}>All</NavDropdown.Item></Link>
      </NavDropdown>
      <NavDropdown title="Home & Living" id="navbarScrollingDropdown" style={{ fontWeight: '700' }}>
        <NavDropdown.Item href="/bedLinens" style={{ fontWeight: '700' }}>Bed Linens</NavDropdown.Item>
        <NavDropdown.Item href="/decor" style={{ fontWeight: '700' }}>Decor</NavDropdown.Item>
        <NavDropdown.Item href="/kitchen" style={{ fontWeight: '700' }}>Kitchen</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/living" style={{ fontWeight: '700' }}>All</NavDropdown.Item>
      </NavDropdown>

    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder={this.props.name}
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>

  </Navbar.Collapse>



  <Link to="/loginComponent"><img src={user_prof} alt="User"/></Link>
  <img src={wishlist} alt="wishlist"/>
  <img src={cart} alt="Cart"/>
</Navbar>



    </div>
    );
    }
    }
    export default GlobalHeader;
    