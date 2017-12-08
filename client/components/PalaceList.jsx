import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'

class PalaceList extends Component {

    render() {
      return(
        <div>
          <h1>PalaceList</h1>
            <ul>
              <li><Link to='/beach'>Beach</Link></li>
              <li><Link to='/home'>Home</Link></li>
              <li><Link to='/office'>Office</Link></li>
            </ul>
        </div>
      )
    }
}
export default PalaceList