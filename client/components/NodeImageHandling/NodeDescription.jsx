import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'



class NodeList extends Component {

  componentDidMount(){
    console.log('component mounted: Node Description')
  }
  render() {

    return(
      <div className="node-info-display">
        <h4><strong>Name:</strong>{this.props.name}</h4> 
        <p><strong>Descripion:</strong>{this.props.description}</p>
      </div>
    )
  }
}
export default NodeList