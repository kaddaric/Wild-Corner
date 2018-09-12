import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import AllArticles from './AllArticles';
import Menu from './Menu';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="Home">
        <Container fluid>
          <Row>
            
            <Menu />
            
            <div className="col-sm-10">
              <h1 className="col-12">Les articles à votre disposition</h1>
              <AllArticles />
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}
 
export default Home;