import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ArticlesList from './ArticlesList'
import { initData } from '../actions/objets'

class AllArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount() {
    this.props.initData();
  }
  render() { 
    const { objets } = this.props;
    return (
      <div className="ObjectsList">
        <ArticlesList articles={objets} myaccount={false}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    objets: state.objets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ initData }, dispatch)
};
 
export default connect(mapStateToProps, mapDispatchToProps)(AllArticles);