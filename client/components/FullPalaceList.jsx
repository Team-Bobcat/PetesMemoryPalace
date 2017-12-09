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
        <div>
          <h1>PalaceList</h1>
            <ul>
            {
              PalaceListAPI.all().map( (p) => (
                <li key={p.id}>
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