import React, { Component } from 'react'
import { render } from 'react-dom'
import { Switch, Route, Link } from 'react-router-dom'
import FullPalaceList from './FullPalaceList'
import ImageView from './ImageView'

class PalaceList extends Component {
// Note to self: this will probably be a param off of the "PalaceList" route :beach
    render() {
      return(
        <Switch>
          <Route exact path='/PalaceList' component={FullPalaceList}/>
          <Route path='/PalaceList/:number' component={ImageView}/>
        </Switch>
      )
    }
}
export default PalaceList

