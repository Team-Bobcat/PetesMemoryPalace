import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'



class AddNode extends Component {

  componentDidMount(){
    console.log('component mounted: AddNode')
  }

  //     // Handle the nodes
  //     handleInputChange(e){
  //   // e.preventDefault();         
  //   const target = e.target;
  //   console.log('target: ', target)
  //   const value = target.value;
  //   const name = target.name;
  //   console.log('name, value: ', name + value)
  //   this.setState({
  //     [name]: value
  //   })
  //
    render() {
    console.log('in ADD NODE')
    return(
      <div>
        <form onSubmit={this.props.addNode}>
        <br />
        <label>
          Add Node Name
          <input
              id="node-name"
              type="text"
              placeholder="give me a name"
              name={this.props.value}
              onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Add Description Name
          <input
              id="node-description"
              name="description"
              type="text"
              placeholder="give me a description"
              description={this.props.value}
              onChange={this.handleInputChange} />
        </label>
          <input id="submit" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
export default AddNode