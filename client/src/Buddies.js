//Karla
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Buddies extends Component {
  constructor(props) {
    super(props);
    this.state = {buddies: []};
  }
  render () {
    const {buddies} = this.state;
    return (
      <div className='buddies'>

        <h4>BUDDIES</h4>
        <ul>
          {buddies.map(person => this.renderBuddy(person))}
        </ul>
        <Link className='addBuddy' to={`/buddies/new`}><b>Add Buddy</b></Link>
      </div>
    )
  }

  renderBuddy(person) {
    return (
      <li className='supportNames' key={person.buddy_id}>
        <Link className='buddyLink'
        href='/buddies/:id'
        to={`/buddies/${person.buddy_id}`}>{person.first_name}{' '}{person.last_name}</Link>
      </li>
    )
  }

  componentDidMount () {
    setTimeout(() => {
      axios.get('/api/buddies').then(res => {
        this.setState({buddies: res.data})
      });
    }, 100)
  }

}


export default Buddies;
