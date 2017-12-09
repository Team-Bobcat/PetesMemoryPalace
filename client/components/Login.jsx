import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, Redirect, } from 'react-router'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: {}
    };
  }
  componentWillMount() {
    fetch('/auth', {credentials: 'include'}).then(response => response.json())
        .then(user => this.setState({ user }));
        
  }

  facebookLogin() {
    if (this.state.user.displayName) {
      return <Redirect to='/palaceList'/>  
      // return <span id="loggedAs">Logged in as <strong>{this.state.user.displayName}</strong> | <a id="logout" href='/logout'>Logout</a></span>;
    } else {
    return (
    <div>
      <a className="btn btn-block btn-social btn-facebook" href="/auth/facebook"><span className="fa fa-facebook"></span>Sign in with Facebook</a>
      <br/>
      <a className="btn btn-block btn-social btn-google" href="/auth/facebook"><span className="fa fa-google"></span>Sign in with Google </a>
      <br/>
      <a className="btn btn-block btn-social btn-instagram" href="/auth/facebook"><span className="fa fa-instagram"></span>Sign in with Instagram</a>
    </div>);
    }
  }
  render() {
    return(
      <div>
        <h1>Welcome to your memory palace.</h1>
        <div id="login">
          <div className="alignTop"></div>
          <h2><i>Login to your memories</i></h2>
          {this.facebookLogin()}
          <div className="alignBot"></div>
        </div>
      </div>
    )
  }
}
export default Login