import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row } from 'reactstrap';
import FormSearch from './FormSearch';
import Menu from './Menu';
import { searchArticle } from '../actions/objets';
import ArticlesList from './ArticlesList';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(values) {  
    this.props.searchArticle(values);
  }

  render() {

    const { findArticles } = this.props;
    return (
      <div className="Search">
        <Container fluid>
          <Row>
            <Menu />
            <div className="main col-sm-10">
              <h1 className="title col-12">Rechercher un article</h1>
              <FormSearch onSubmit={this.submitForm} />
              <ArticlesList articles={findArticles}/>
            </div>
          </Row>
        </Container>      
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    findArticles: state.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ searchArticle }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);