import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../images/logo.jpg';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Container className="Menu col-sm-2">
        <Col className="logo">
          <NavLink tag={Link} to="/">
            <img className="card-img-top" src={logo} alt="wild corner" />
          </NavLink>
        </Col>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/myarticles">John</NavLink>
            <NavLink tag={Link} to="/search">Rechercher</NavLink>
          </NavItem>
        </Nav>
      </Container>
    );
  }
}

export default Menu;