import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import PalaceListAPI from '../palaceList'

class FullPalaceList extends Component {
// Note to self: this will probably be a param off of the "PalaceList" route :beach
    render() {
      console.log('here - in FullPalaceList')
      console.log(PalaceListAPI.all())
      PalaceListAPI.all().map( (p) => {
        console.log('p.name: ', p.name);
      })
      return(
        <div className="palace-list-div">
          <h1>Palace List</h1>
          <ul> 
            {/*column headers section*/}
            <li className="palace-li">
              {/* <div className="flexbox"> */}
                <span className="location-header"><b>Palace Location</b></span> 
                <span className="topic-header"><b>Topic Stored</b></span>
              {/* </div> */}
            </li>
          <hr/>
            {PalaceListAPI.all().map( (p) => {
                return(
                  <div className="flexbox">                  
                  <li className="palace-li" key={p.id} >
                      <Link to={`/PalaceList/${p.id}`}>
                        <span className="name">{p.name}</span>
                      </Link>
                      <Link to={`/PalaceList/${p.id}`}>
                      <span className="description">{p.description}</span>
                      </Link>
                 </li>
                  </div>)
            })}
            {/*Add new node, currently just a placeholder*/}
            <button className="btn-facebook btn btn-block btn-social" id="addNewPalace">ADD NEW PALACE</button>
            </ul>
        </div>
      )
    }
}
export default FullPalaceList