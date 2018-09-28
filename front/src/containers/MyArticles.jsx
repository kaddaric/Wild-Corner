import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Button, Container, Row } from 'reactstrap';
import Menu from './Menu';
import ArticlesList from './ArticlesList';
import { selectMyArticle } from '../actions/objets';


class MyArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {    
    this.props.selectMyArticle(this.props.signIn.id);
  }
  render() {

    const { myArticles, signIn } = this.props;
    return (
      <div className="MyArticle">
        <Container fluid>
          <Row>
            <Menu />
            <div className="main col-sm-10">
              <h1 className="title col-12">Mes articles</h1>
              <div className="content">
                <ArticlesList articles={myArticles} connected={signIn.isLogged}  />
                <Button tag={Link} to='./myarticles/add'>Ajouter un article</Button>
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
    myArticles: state.myArticles,
    signIn: state.signIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectMyArticle }, dispatch)
};


export default connect(mapStateToProps, mapDispatchToProps)(MyArticles);