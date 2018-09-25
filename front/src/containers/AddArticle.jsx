import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row } from 'reactstrap';
import { addArticle } from '../actions/objets';
import Menu from './Menu';
import FormAddArticle from './FormAddArticle';

class AddArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(values) {
    values = {
      ...values,
      id_propriétaire: this.props.signIn[0].id,
    }
    console.log(values);
     
    this.props.addArticle(values);
  }

  render() {
    const { signIn } = this.props;
    return (
      <div className="AddArticle">
        <Container fluid>
          <Row>
            <Menu connect={signIn[0].login}/>
            <div className="main col-sm-10">
              <h1 className="title col-12">Ajouter votre article</h1>
              <div className="content">
                <FormAddArticle onSubmit={this.submitForm} />
              </div>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    signIn: state.signIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addArticle }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AddArticle);