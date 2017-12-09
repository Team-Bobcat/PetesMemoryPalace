import React from 'react';

class Nodeicon extends React.Component {
    
    render() {
      let nodeId = this.props.id
      let id = this.props.node[nodeId].id;
      let xSpot = this.props.node[nodeId].locX;
      let ySpot = this.props.node[nodeId].locY;
      
      // this.props.node
      var dotStyle= {
        position: 'absolute',      
        left: xSpot,
        top: ySpot,
        zIndex: '3',
        width: '10px'
      }
      // console.log('id: '+ id + ', x: ' + xSpot + ', y: ' + ySpot)
      return (
        <a className="dots-anchor" href="#">
        {/* <img className="dots" id={id} style={dotStyle} onClick={this.props.onMouseClick} onMouseOver={this.props.onMouseMove} src='http://www.clker.com/cliparts/T/G/b/7/r/A/red-dot-md.png'/> */}
        <img className="dots" id={id} style={dotStyle} onClick={this.props.onMouseClick} src='http://www.clker.com/cliparts/T/G/b/7/r/A/red-dot-md.png'/>

        </a>
      )  
    }
  }

  export default Nodeicon;