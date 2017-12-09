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
      console.log('nodes yoo: ', this.props.nodes)
      let count = 0;
      return (
        <div ref="elem" className="container">
          <div>
            <img onClick={this.props.onMouseClick} width="80%" src="https://picsum.photos/200/300?image=1059" />
          {/* need to render each dot and do onMouseOver for each */}
            {nodes.map( (node, idx) => {
              return (
                <Nodeicon key={idx} id={idx} node={this.props.nodes} onMouseMove={this.props.onMouseMove} />
              )
            })}
          </div>
        </div>
      )
    }
  }

  export default NodesDisplayHandler;