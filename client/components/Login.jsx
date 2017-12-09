import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class Login extends Component {

    render() {
      return(
        <div>
          <p>Please Sign in</p>
          <form>
            <input type="text" placeholder="Enter username"/>
            <br/>
            <input type="text" placeholder="Enter password"/>
            <br/>
            <input type="submit" value="Login"/>
          </form>
        </div>
      )
    }
}
export default Login