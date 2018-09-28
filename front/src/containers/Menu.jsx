import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col, Nav, NavLink, Button } from 'reactstrap';
import { resetConnexion } from '../actions/signIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';


import logo from '../images/logo.jpg';

class Menu extends Component {

  reset(){    
    this.props.resetConnexion();
    window.location.href = "/";
  }

  render() {
    const { signIn } = this.props;
    const connect = signIn.isLogged ? signIn.login : "connexion";

    return (
      <Container className="Menu col-sm-2">
        <Row className="logo mb-5">
          <NavLink tag={Link} to="/">
            <img className="card-img-top" src={logo} alt="wild corner" />
          </NavLink>
          {
            !signIn.isLogged 
              ? <NavLink tag={Link} to="/signUp">Je m'inscris</NavLink>
              : <Button onClick={() => this.reset()}>Déconnexion</Button>
          }
          
        </Row>
        <Nav className="ml-auto" navbar>
          <Col>
            <Col className="menuButton mb-5">
              <Row className="icone" tag={Link} to="/myarticles">
                <FontAwesomeIcon icon={faUser} size="3x" color="#f98830" />
              </Row>
              <Row className="legende">{connect}</Row>
            </Col>
            <Col className="menuButton mb-5">
              <Row className="icone" tag={Link} to="/search">
                <FontAwesomeIcon icon={faSearch} size="3x" color="#f98830" />
              </Row>
              <Row className="legende">Rechercher</Row>
            </Col>
          </Col>
        </Nav>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    signIn: state.signIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ resetConnexion }, dispatch)
};


export default connect(mapStateToProps, mapDispatchToProps)(Menu);