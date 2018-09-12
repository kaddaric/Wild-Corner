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
    this.props.addArticle(values);
  }

  render() {
    return (
      <div className="AddArticle">
        <Container fluid>
          <Row>

            <Menu />

            <div className="col-sm-10">
              <h1 className="col-12">Ajouter votre article</h1>
              <FormAddArticle onSubmit={this.submitForm} />
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addArticle }, dispatch)
}
export default connect(null, mapDispatchToProps)(AddArticle);