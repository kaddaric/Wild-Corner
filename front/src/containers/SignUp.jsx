import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FormSignUp from './FormSignUp';
import { signUp } from '../actions/signUp';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(values) {  
    this.props.signUp(values);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.signIn.isLogged) {
        this.props.history.push("/");
    }
  }

  render() { 
    return (
      <div className="SignUp">
        <Container>
          <h1 className="text-center my-5">WILD CORNER</h1>
          <h4 className="text-center my-5">Veuillez remplir les champs pour votre inscription</h4>
          <FormSignUp onSubmit={this.submitForm}/>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    signIn: state.signIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ signUp }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);