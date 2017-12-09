import React, { Component } from 'react'
import { render } from 'react-dom'
// import { Link } from 'react-router-dom'
import path from 'path';
class ImageView extends Component {
// Note to self: this will probably be a param off of the "PalaceList" route :beach
    render() {
      return(
        <div>
          <h1>Image View</h1>
          <img src={require('../../images/beachHouse.jpg')} />
        </div>
      )
    }
}
export default ImageView