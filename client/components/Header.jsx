import React, { Component } from 'react'
import { render } from 'react-dom'
// import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav>
      <ul>
        {/* <li><Link to='/'>Home</Link></li> */}
        <li className="navbar"><Link to='/'>Login</Link></li>
        <li className="navbar"><Link to='/PalaceList'>PalaceList</Link></li>
      </ul>
    </nav>
  </header>
)
export default Header