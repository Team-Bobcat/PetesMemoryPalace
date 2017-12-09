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
    fetch('/auth', {credentials: 'include'}).then(response => console.log(response.json()))
        // .then(user => this.setState({ user }));
        
  }

  facebookLogin() {
    console.log(this.state.user);
    if (this.state.user.name) {
        return <span>Logged in as <strong>{this.state.user.name.replace(/"/g, '')}</strong> | <a href='/logout'>Logout</a></span>;
    } else {
        return <a href="/auth/facebook"><img src="https://scontent-lax3-2.xx.fbcdn.net/v/t39.2365-6/17639236_1785253958471956_282550797298827264_n.png?oh=499251858fbeca5f9770531c16da6e89&oe=5A89FFEA" /></a>;
    }
  }
  render() {
    return(
      
      <div id="login">
        <div className="alignTop"></div>
        {this.facebookLogin()}
        <div className="alignBot"></div>
      </div>
    )
  }
}
export default Login