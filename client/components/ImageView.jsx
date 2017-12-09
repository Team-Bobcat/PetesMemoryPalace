import React, { Component } from 'react'
import { render } from 'react-dom'
// import { Link } from 'react-router-dom'
import NodeListAPI from '../NodeList'
import NodeDescription from './NodeDescription'

class ImageView extends Component {
// Note to self: this will probably be a param off of the "PalaceList" route :beach
  constructor(props){
  super(props);
    this.state = {
      nodes: [],
      id: 1
    }
  }
  componentDidMount(){
    console.log('component mounted: Image view')
  }
  // //call the api
  // let importedNodes = [];
  // console.log(NodeListAPI.nodeList)
  // // NodeListAPI.all().map( (node) => {
  // //   console.log(node);
  // //   nodes.push(node);
  // // })


  //   this.setState({nodes: importedNodes})
  // }

  // will have to do differently with real API call - .all will need to be written here.
  // getAllNodes(NodeListAPI){
  //   return NodeListAPI.
  // }

  render() {
      return(
        <div>
          <h1>Image View</h1>
          <img src="https://picsum.photos/200/300?image=1059"/>
          {/* <img src={require(`../../images/beachHouse.jpg`)} /> */}
          <NodeDescription nodes = {this.state.nodes} currentNode = {this.state.currentNode}/>
        </div>
      )
    }
}
export default ImageView