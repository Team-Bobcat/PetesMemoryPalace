import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import PalaceListAPI from '../palaceList'

class FullPalaceList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      palaces: [],
    }
  }
  fetchPalaces(){
    fetch('/getPalaces',{
      method: 'GET',
      credentials: 'include',
    }).then((response) => response.json()).then(data => {
      console.log(data);
      this.setState({palaces: data});
    })
  }

  postPalace(event){
    event.preventDefault();
    const name = 'redondo';
    const topic = 'seaanimals';
    const img = 'jusin';
    fetch(`/addPalace?palace=${name}&topic=${topic}&img=${img}`, {
      method: 'GET',
      credentials: 'include',
    }).then(results => {
      this.fetchPalaces()
    }
    );
  }

  render() {
    console.log('my fetched palaces', this.state.palaces);
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
          {this.state.map((p, i) => {
              return(
                <div className="flexbox">                  
                <li className="palace-li" key={i} >
                    <Link to={`/PalaceList/${p.name}`}>
                      <span className="name">{p.name}</span>
                    </Link>
                    <Link to={`/PalaceList/${p.name}`}>
                    <span className="description">{p.topic}</span>
                    </Link>
                </li>
                </div>)
          })}
          {/*Add new node, currently just a placeholder*/}
          <div className="form-container">
            <form onSubmit={this.postPalace}>
                <input className="input" type="text" component="input" placeholder="New Palace"/>
                <input className="input" type="text" component="input" placeholder="New Topic"/>
                <input className="input" type="text" component="input" placeholder="Image URL"/>

                <input className="btn-facebook btn btn-block" id="addNewPalace"  type="submit"/>
            </form>
          </div>
          {/* <button className="btn-facebook btn btn-block btn-social" id="addNewPalace">ADD NEW PALACE</button> */}
          </ul>
      </div>
    )
  }
}
export default FullPalaceList