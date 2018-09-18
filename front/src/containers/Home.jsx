import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import AllArticles from './AllArticles';
import Menu from './Menu';

class Home extends Component {

  render() { 
    return (
      <div className="Home">
        <Container fluid>
          <Row>
            <Menu />
            <div className="main col-sm-10">
              <h1 className="title col-12">Les articles à votre disposition</h1>
              <div className="content">
                <AllArticles />
              </div>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}
 
export default Home;