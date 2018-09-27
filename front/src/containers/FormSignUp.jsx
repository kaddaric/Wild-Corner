import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Container, Row, Col } from 'reactstrap';

class FormSignUp extends Component {

  render() {
    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <form className="FormSignUp" onSubmit={handleSubmit}>
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
          <Row className="justify-content-center py-1">
            <Col className="col-4">
              <Field
                name="confirmPassword"
                component="input"
                type="password"
                placeholder="Confirm password"
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

FormSignUp = reduxForm({
  form: 'signUp'
})(FormSignUp)

export default FormSignUp;