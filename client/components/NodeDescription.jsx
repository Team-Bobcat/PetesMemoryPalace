import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Header from './Header'
import Main from './Main'


class NodeList extends Component {

  componentDidMount(){
    console.log('component mounted: Image view')
  }
  render() {

    return(
      <div>
        <p>node info here</p>
      </div>
    )
  }
}
export default NodeList