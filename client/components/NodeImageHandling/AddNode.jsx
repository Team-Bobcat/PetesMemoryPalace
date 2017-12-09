import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'



class AddNode extends Component {
  constructor(props){
    super(props);
    this.state = {
      node: [],
      nodeName: '',
      description: ''
    };
    this.addNode = this.addNode.bind(this); 
  }
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
  // };

  addNode(e){   // review how you're doing this -- should probably be doing a copy here
    let tempNode = this.state.nodes.slice();
    e.preventDefault();

    // assemble data for todo
    const node = {
      nodeName: this.state.value,
      description: this.state.description,
    }

    //update data
    this.state.node.push(tempNode);
    
    //make push to database
    //update state
    this.setState({
      node: tempNode
    });
  }



  render() {
    console.log('in ADD NODE')
    return(
      <div>
        <form onSubmit={this.addNode}>
        <br />
        <label>
          Add Node Name
          <input
              id="node-name"
              name="name"
              type="text"
              placeholder="give me a name"
              value={this.state.value}
              onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Add Description Name
          <input
              id="node-name"
              name="description"
              type="text"
              placeholder="give me a name"
              description={this.state.value}
              onChange={this.handleInputChange} />
        </label>
          <input id="submit" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
export default AddNode