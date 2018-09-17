import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Container, Row, Col } from 'reactstrap';

class FormSignIn extends Component {

  render() {
    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <form className="FormSignIn" onSubmit={handleSubmit}>
        <Container className="border border-success">
          <Row className="justify-content-center">
            <Col className="col-2 text-center"><label>Login</label></Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="col-4">
              <Field
                name="login"
                component="input"
                type="text"
                placeholder="Login"
                className="form-control"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="col-2 text-center"><label className="text-right">Password</label></Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="col-4">
              <Field
                name="password"
                component="input"
                type="password"
                placeholder="Password"
                className="form-control"
              />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row className="justify-content-center my-3">
            <button type="submit" className="btn btn-success" disabled={pristine || submitting}>
              Submit
            </button>
          </Row>
        </Container>
      </form>
    );
  }
}

FormSignIn = reduxForm({
  form: 'signIn'
})(FormSignIn)

export default FormSignIn;