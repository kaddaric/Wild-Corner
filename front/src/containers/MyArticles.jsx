import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'reactstrap';
import Menu from './Menu';
import ArticlesList from './ArticlesList';
import { selectMyArticle } from '../actions/objets'


class MyArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.selectMyArticle();
  }
  render() {

    const { myArticles } = this.props;
    return (
      <div className="MyArticle">
        <Container fluid>
          <Row className="row">
            <Menu />
            <Col sm="10" className="main">
              <h1 className="title col-12">Mes articles</h1>
              <ArticlesList articles={myArticles} myaccount={true}/>
              <Button tag={Link} to='./myarticles/add'>Ajouter un article</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    myArticles: state.myArticles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectMyArticle }, dispatch)
};


export default connect(mapStateToProps, mapDispatchToProps)(MyArticles);