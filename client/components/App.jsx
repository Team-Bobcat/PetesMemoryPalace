import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Header from './Header'
import Main from './Main'


class App extends Component {

    render() {
      return(
        <div>
          <h1 className="MainHead">Welcome to your Digital Memory Palace</h1>
          <Header />
          <Main />
          <img src="../../office1.jpg"/>
        </div>
      )
    }
}
export default App