import React, { Component } from 'react'
import { render } from 'react-dom'
// import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { Link } from 'react-router-dom'



class Header extends Component{
  constructor(props) {
    super(props);
    this.state = {
        user: {}
    };
  }

  componentWillMount() {
    fetch('/auth', {credentials: 'include'}).then(response => response.json())
        .then(user => this.setState({ user }));
        
  }

  login() {
    if (this.state.user.displayName) {
      // return <Redirect to='/palaceList'/>  
      return <li><a href='/logout'>Logout</a></li>;
    } else {
      return <li><Link to='/'>Login</Link></li>
      
    }
  }


  render(){return (
    <header>
      <nav>
        <ul>
          {/* <li><Link to='/'>Home</Link></li> */}
          {this.login()}
          <li><Link to='/PalaceList'>PalaceList</Link></li>
        </ul>
      </nav>
    </header>
)}
}
export default Header