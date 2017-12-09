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
    return(
      <div>
        <form className="node-form" onSubmit={(e) => {this.props.addNode(e)}}>
        <br />
        <label className="node-input-labels">
          <input
              id="node-name"
              className="image-view-input"
              name="name"
              type="text"
              placeholder="Node Name"
              onChange={this.props.handleInputChange} />
        </label>
        <br />
        <label className="node-input-labels">
          <input
              id="node-description"
              className="image-view-input"
              name="description"
              type="text"
              placeholder="Node description"
              onChange={this.props.handleInputChange} />
        </label>
        <br />
          <input className="btn-facebook btn btn-block btn-social" id="submit" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
export default AddNode