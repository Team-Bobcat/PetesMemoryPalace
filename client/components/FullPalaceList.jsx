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
            <ul className="palace-ul">
            {
              PalaceListAPI.all().map( (p) => (
                <li key={p.id} className="palace-li">
                  <Link to={`/PalaceList/${p.id}`}>{p.name}</Link>
                </li>
              ))
            }
            </ul>
        </div>
      )
    }
}
export default FullPalaceList