import React, { Component } from 'react'
import { render } from 'react-dom'
import { Switch, Route, Link, withRouter } from 'react-router-dom'
import NodeListAPI from '../../NodeList'
import NodeDescription from './NodeDescription'
import NodesDisplayHandler from './NodesDisplayHandler'
import AddNode from './AddNode'



class ImageView extends Component {
// Note to self: this will probably be a param off of the "PalaceList" route :beach
  constructor(props){
  super(props);
    this.state = {
      nodes: [],
      id: 1,
      selectedOption: 'display',
      locX: 0,
      locY: 0,
      locXHover: 0,
      locYHover: 0,
      name: 'George Washington',
      description: 'washing a tin cup'
    }
  this.handleOptionChange = this.handleOptionChange.bind(this);
  this.handleInputChange = this.handleInputChange.bind(this);
  this.onMouseMove = this.onMouseMove.bind(this);
  this.onMouseClick = this.onMouseClick.bind(this);
  this.addNode = this.addNode.bind(this); 

  }
  componentDidMount(){
    console.log('component mounted: Image view');
    console.log('NodeListAPI.nodeList: ', NodeListAPI.nodeList)
    console.log('NodeListAPI.nodeList.length: ', NodeListAPI.nodeList.length)
    this.setState({
      nodes: NodeListAPI.nodeList,
      id: NodeListAPI.nodeList.length});
  }

  // will have to do differently with real API call - .all will need to be written here.
  // getAllNodes(NodeListAPI){
  //   return NodeListAPI.
  // }
  handleOptionChange(changeEvent) {
    console.log(changeEvent.target.value);
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }

  onMouseMove(e) {
    console.log(e.screenX, e.screenY)
    this.setState({
      locXHover: e.screenX,
      locYHover: e.screenY
    })
  }
  // handles adding and viewing node info
  onMouseClick(e) {
    if(this.state.selectedOption === 'display'){
      console.log('DISPLAY CURRENT NODE functionality here')
      console.log(e.screenX, e.screenY)
      this.setState({
        locXHover: e.screenX,
        locYHover: e.screenY
      })
    } else { // this.state.selectedOption === 'add' , add new node
      console.log('ADD NODE functionality here')
      console.log(e.screenX, e.screenY)
      let nodeCopy = this.state.nodes.slice()

      //create new node at the coordinates
      // let createNewNode = new Node; 
      let len = nodeCopy.length;
      let counter = this.state.id + 1;
      this.state.locX = e.screenX;
      this.state.locY = e.screenY;
      const nodeAdd = {
        id: counter,
        locX: e.screenX,
        locY: e.screenY
      }
      nodeCopy.push(nodeAdd);
      //make push to database  - this should probably go on the SUBMIT BUTTON SECTION, so all data loaded
      // fetch('http://localhost:8080/api', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(nodeAdd)
      // }).then((res) => {
      //   console.log("this is res", res)
      // }).catch((err) => {
      //   console.log(err)
      // });


      //update state
      this.setState({
        nodes: nodeCopy,
        id: counter
      })
    }
  }
  handleInputChange(e){
    e.preventDefault();         
    const target = e.target;
    console.log('target: ', target)
    const value = target.value;
    const name = target.name;
    console.log('Input change name, value: ', name + value)
    this.setState({
      [name]: value
    })
  };
  addNode(e){   // review how you're doing this -- should probably be doing a copy here
    e.preventDefault();
  
    console.log('in the addnode function')
    let tempNodes = this.state.nodes.slice();

    // assemble data for todo
    const node = {
      nodeName: this.state.value,
      description: this.state.description,
    }
    //update data
    tempNodes.push(node)
    NodeListAPI.nodeList.push(node)
    
    //make push to database
    //update state
    this.setState({
      node: tempNode
    });
  }


  render() {
    NodeListAPI.nodeList.map( (node) => {
      console.log('node name:', node.name)
      console.log('node id:', node.id)
      })
    var renderThis;
    if(this.state.selectedOption === 'display'){
      console.log('here')
      renderThis = <NodeDescription 
                      name={this.state.name}
                      description={this.state.description} />
    }else{
      renderThis = <AddNode 
                      locX={this.state.locX}
                      locY={this.state.locY}
                      value={this.state.value}
                      name={this.state.name}
                      description={this.state.description}
                      addNode={this.state.addNode}
                      handleInputChange={this.state.handleInputChange}
                    />
    }
      return(
        <div>
          <h1>Image View</h1>
          <div className="image-view-grid">
            <div className="radio">
              <input type="radio" value="display" checked={this.state.selectedOption === 'display'} onChange={this.handleOptionChange} /><label htmlFor="display">Display Current</label>
              <br/>
              <input type="radio" value="add" checked={this.state.selectedOption === 'add'} onChange={this.handleOptionChange} /><label htmlFor="add">Add New Node</label>
            </div>
            <div className="display">
              <NodesDisplayHandler
                nodes={this.state.nodes}
                locX={this.state.locX}
                locY={this.state.locY}
                locXHover={this.state.locXHover}
                locYHover={this.state.locYHover}
                onMouseMove={this.onMouseMove}
                onMouseClick={this.onMouseClick}
                selectedOption={this.state.selectedOption} />
            </div>
          </div>
          <div className="lower-half">
            {renderThis}
          </div>
        </div>
      )
    }
  }
export default ImageView