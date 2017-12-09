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
          <h1>PalaceList</h1>
          <ul> 
            {/*column headers section*/}
            <li className="list-item-header">
              <div className="list-item-header-grid"> 
                <span className="location-header">Palace Location</span> 
                <span className="topic-header">Topic Stored</span>
              </div>
            </li>
          <hr/>
            {PalaceListAPI.all().map( (p) => {
                return(
                  <li className="palace-li" key={p.id} >
                    <div className="palace-li-grid">
                      <Link to={`/PalaceList/${p.id}`}>
                        <span className="name">{p.name}</span>
                        <span className="description">{p.description}</span>
                      </Link>
                    </div>
                  </li>
                )
            })}
            {/*Add new node, currently just a placeholder*/}
            <button>ADD NEW PALACE</button>
            </ul>
        </div>
      )
    }
}
export default FullPalaceList