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

  render() { 
    return (
      <div className="SignIn">
        <Container>
          <FormSignIn onSubmit={this.submitForm}/>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ signIn }, dispatch)
};

export default connect(null, mapDispatchToProps)(SignIn);