import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class Login extends Component {

    render() {
      return(
        <div>
          <input type="text" placeholder="Enter username"/>
          <input type="text" placeholder="Enter password"/>

        </div>
      )
    }
}
export default Login