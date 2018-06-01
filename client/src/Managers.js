//Karla
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Managers extends Component {
  constructor(props) {
    super(props);
    this.state = {managers: []};
  }
  render () {
    const {managers} = this.state;
    return (
      <div className='managers'>

        <h4>MANAGERS</h4>
        <ul>
          {managers.map(person => this.renderManager(person))}
        </ul>
        <Link className='addManager' to={`/managers/new`}><b>Add Manager</b></Link>
      </div>
    )
  }

  renderManager(person) {
    return (
      <li className='supportNames' key={person.manager_id}>
        <Link className='managerLink'
        href='/managers/:id'
        to={`/managers/${person.manager_id}`}>{person.first_name}{' '}{person.last_name}</Link>
      </li>

    )
  }

  componentDidMount () {
    axios.get('/api/managers').then(res => {
      this.setState({managers: res.data})
    });
  }

}

export default Managers;
