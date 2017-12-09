import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

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
    console.log(this.state.user);
    if (this.state.user.displayName) {
        return <span>Logged in as <strong>{this.state.user.displayName}</strong> | <a href='/logout'>Logout</a></span>;
    } else {
    return (
    <div>
      <a className="btn btn-block btn-social btn-facebook" href="/auth/facebook">Sign in with Facebook</a>
      <br/>
      <a className="btn btn-block btn-social btn-google" href="/auth/facebook">Sign in with Google </a>
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