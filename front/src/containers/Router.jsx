import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import MyArticles from './MyArticles';
import AddArticle from './AddArticle';
import Search from './Search';
import SignIn from './SignIn';
import SignUp from './SignUp';
import RequireAuthentification from '../helpers/require-authentification';


class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="Router">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/myarticles/add" component={AddArticle} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/signIn" component={SignIn} />
            <Route path="/myarticles" component={RequireAuthentification(MyArticles)}/>
            {/* <Route path="/myarticles" render={() =>  signIn.isLogged ? <MyArticles /> : <SignIn /> } /> */}
            <Route path="/search" component={Search} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    signIn: state.signIn,
  };
};

export default connect(mapStateToProps)(Router);