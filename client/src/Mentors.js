//Karla
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Mentors extends Component {
  constructor(props) {
    super(props);
    this.state = {mentors: []};
  }
  render () {
    const {mentors} = this.state;
    return (
      <div className='mentors'>

        <h4>MENTORS</h4>
        <ul>
          {mentors.map(person => this.renderMentor(person))}
        </ul>
        <Link className='addMentor' to={`/mentors/new`}><b>Add Mentor</b></Link>
      </div>
    )
  }

  renderMentor(person) {
    return (
      <li className='supportNames' key={person.mentor_id}>
        <Link className='managerLink'
        href='/mentors/:id'
        to={`/mentors/${person.mentor_id}`}>{person.first_name}{' '}{person.last_name}</Link>
      </li>
    )
  }
  componentDidMount () {
    setTimeout(() => {
      axios.get('/api/mentors').then(res => {
        this.setState({mentors: res.data})
      });
    }, 50)
  }

}



export default Mentors;
