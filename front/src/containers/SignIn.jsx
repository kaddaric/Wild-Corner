import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FormSignIn from './FormSignIn';
import { signIn } from '../actions/signIn';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(values) {  
    this.props.signIn(values);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.isLogged) {
      this.props.history.push("/");
    }
  }

  render() { 
    console.log(this.props.signIn);
    
    return (
      <div className="SignIn">
        <Container>
          <h1 className="text-center my-5">WILD CORNER</h1>
          <h4 className="text-center my-5">Veuillez vous identifiez</h4>
          <FormSignIn onSubmit={this.submitForm}/>
        </Container>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    isLogged: state.signIn.isLogged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ signIn }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);