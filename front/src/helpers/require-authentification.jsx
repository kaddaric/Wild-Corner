import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ChildComponent) {
  class RequireAuthentification extends Component {
    componentWillMount() {
      if (!this.props.isLogged) {
        this.props.history.push("/");
      }
    }
    componentWillUpdate(nextProps) {
      if (!nextProps.isLogged) {
        this.props.history.push("/");
      } else {
        this.props.history.push("/signin");
      }
    }
    render() {
      return (
        <ChildComponent />
      );
    }
  }

  const mapStateToProps = (state) => ({
      isLogged: state.signIn.isLogged
  });

  return connect(mapStateToProps)(RequireAuthentification);
}