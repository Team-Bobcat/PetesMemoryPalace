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
      palaces: [],
      id: 1,
      selectedOption: 'display',
      locX: 0,
      locY: 0,
      locXHover: 0,
      locYHover: 0,
      name: 'George Washington',
      description: 'washing a tin cup',
      location: '',
      srcImg: ''
    }
  this.handleOptionChange = this.handleOptionChange.bind(this);
  this.handleInputChange = this.handleInputChange.bind(this);
  // this.onMouseMove = this.onMouseMove.bind(this);
  this.onMouseClick = this.onMouseClick.bind(this);
  this.addNode = this.addNode.bind(this); 
  this.getPalace = this.getPalace.bind(this);  
  }
  componentWillMount(){
    var currentLocation = this.props.location.pathname
    var routeArr = currentLocation.split("/")
    this.getPalace(routeArr[2]);
  }
  componentDidMount(){

    this.setState({
      nodes: NodeListAPI.nodeList,
      id: NodeListAPI.nodeList.length});
    }
  

  getPalace(location){
    // event.preventDefault();
    const name = location;
    fetch(`/getPalace?palace=${name}`, {
      method: 'GET',
      credentials: 'include',
    }).then( (res) => res.json())
      .then( (data) => {
        this.setState({srcImg: data[0].img})
  })
}

  // will have to do differently with real API call - .all will need to be written here.
  // getAllNodes(NodeListAPI){
  //   return NodeListAPI.
  // }
  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }
  handleInputChange(e){
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    let name = target.name;
    // console.log('name, value: ', name + ' ' + value)
    this.setState({
      [name]: value
    })
  };

  // onMouseMove(e) {
  //   // console.log(e.screenX, e.screenY)
  //   this.setState({
  //     locXHover: e.screenX,
  //     locYHover: e.screenY
  //   })
  // }
  // handles adding and viewing node info
  onMouseClick(e) {
    if(this.state.selectedOption === 'display'){
      // console.log('DISPLAY CURRENT NODE functionality here')
      // console.log(e.screenX, e.screenY)
      // console.log(this.state.nodes)
      this.setState({
        locXHover: e.screenX,
        locYHover: e.screenY
        
      })
    } else { // this.state.selectedOption === 'add' , add new node
      // let createNewNode = new Node; 
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
      this.setState({
        id: counter,
        locX: e.screenX,
        locY: e.screenY,
      })
    }
  }

  addNode(e){   // review how you're doing this -- should probably be doing a copy here
    e.preventDefault();
    e.stopPropagation();
    let tempNodes = this.state.nodes.slice();
    let len = tempNodes.length;
    let counter = this.state.id;
    // assemble data for todo
    const node = {
      // id: counter,
      name: this.state.name,
      description: this.state.description,
      image: 'placeholder',
      locX: this.state.locX,
      locY: this.state.locY,
    }
    //update data
    tempNodes.push(node)
    NodeListAPI.nodeList.push(node)
    console.log(node)
    // console.log('JSON stringify: ', JSON.stringify(node))
    //make push to database
    fetch('http://localhost:3000/storeNode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(node)
    }).then((res) => {
      console.log("this is res", res)
    }).catch((err) => {
      console.log(err)
    });
    counter += 1;
    //update state
    this.setState({
      nodes: tempNodes,
      id: counter,
      name: '',
      description: ''
    });
  }


  render() {
    // NodeListAPI.nodeList.map( (node) => {
    //   console.log('name:', node.name)
    //   console.log('node id:', node.id)
    //   })
    var renderThis;
    if(this.state.selectedOption === 'display'){
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
                      addNode={this.addNode}
                      handleInputChange={this.handleInputChange}
                    />
    }
      return(
        <div className="image-view-vert-grid">
          <div className="head-spacer">
            <h1 className="image-view-h1">Image View</h1>
          </div>
          <div className="image-view-grid">
            <div className="radio">
              <input className="radio-btn" type="radio" value="display" checked={this.state.selectedOption === 'display'} onChange={this.handleOptionChange} /><label className="radio-label" htmlFor="display">Display Current</label>
              <br/>
              <input className="radio-btn" type="radio" value="add" checked={this.state.selectedOption === 'add'} onChange={this.handleOptionChange} /><label className="radio-label" htmlFor="add">Add New Node</label>
            </div>
            <div className="display">
              <NodesDisplayHandler
                nodes={this.state.nodes}
                locX={this.state.locX}
                locY={this.state.locY}
                locXHover={this.state.locXHover}
                locYHover={this.state.locYHover}
                srcImg={this.state.srcImg}
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