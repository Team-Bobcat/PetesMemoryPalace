import React from 'react';
import Nodeicon from './Nodeicon';

class NodesDisplayHandler extends React.Component {

    render() {
      let x = 50;
      let y = 100;
      let xSpot = String(x)+'px';
      let ySpot = String(y)+'px';
      let xHover = this.props.locXHover;
      let yHover = this.props.locYHover;

      let nodes = this.props.nodes;
      let count = 0;
      return (
        <div ref="elem" className="container">
          <div>
            <img className="palace-image" onClick={this.props.onMouseClick} src={this.props.srcImg} />
          {/* need to render each dot and do onMouseOver for each */}
            {nodes.map( (node, idx) => {
              return (
                <Nodeicon key={idx} id={idx} node={this.props.nodes} onClick={this.props.onMouseClick} />
              )
            })}
          </div>
        </div>
      )
    }
  }

  export default NodesDisplayHandler;