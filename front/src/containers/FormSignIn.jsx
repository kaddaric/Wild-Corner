import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class FormSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit}>
      <div>
        <label>Login</label>
        <div>
          <Field
            name="login"
            component="input"
            type="text"
            placeholder="Login"
          />
        </div>
      </div>
      <div>
        <label>Password</label>
        <div>
          <Field
            name="password"
            component="input"
            type="password"
            placeholder="Password"
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </div>
    </form>
    );
  }
}

FormSignIn = reduxForm({
  form: 'signIn'
})(FormSignIn)

export default FormSignIn;