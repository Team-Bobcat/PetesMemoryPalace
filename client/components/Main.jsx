import React, { Component } from 'react'
import { render } from 'react-dom'
// import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { Switch, Route, Link } from 'react-router-dom'
import Login from './Login'
import PalaceList from './PalaceList'


class Main extends Component {

    render() {
      return(
        <main>
          <Switch>
          {/* <Route exact path='/' component={Home}/> */}
          {/* both /roster and /roster/:number begin with /roster */}
          <Route exact path='/' component={Login} />
          {/*note - if logged in already, the 'root should probably take you to home*/}
          <Route path='/palacelist' component={PalaceList}/>
          </Switch>
        </main>
      )
    }
}
export default Main