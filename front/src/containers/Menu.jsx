import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from '../images/logo.jpg';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Container className="Menu col-sm-2">
        <Row className="logo mb-5">
          <NavLink tag={Link} to="/">
            <img className="card-img-top" src={logo} alt="wild corner" />
          </NavLink>
        </Row>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Col className="menuButton mb-5">
              <Row className="icone" tag={Link} to="/myarticles">
                <FontAwesomeIcon icon="fas fa-user" />
              </Row>
              <Row className="legende">John</Row>
            </Col>
            <Col className="menuButton mb-5">
              <Row className="icone" tag={Link} to="/search">
                <FontAwesomeIcon icon="fas fa-user" />
              </Row>
              <Row className="legende">Rechercher</Row>
            </Col>
          </NavItem>
        </Nav>
      </Container>
    );
  }
}

export default Menu;