//Karla
import React, { Component } from 'react';
import axios from 'axios';
import { Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Mentor extends Component {
  constructor(props) {
    super(props);
    this.state = {mentor: null, loading: true};
  }
  render () {
    const { mentor, loading } = this.state;
    const {id} = this.props.match.params;
    if(loading) {
      return <div>Loading...</div>;
    }
    return (
      <div className = 'mentor'>
        <h3 className='learnMore'>Learn more about {mentor.first_name}!</h3>
        <Image className='supportPic' width='120px' src={mentor.photo_link}/>
        <div className='supportInfo'>
          <h2 className='suppName' >{mentor.first_name}{' '}{mentor.last_name}</h2>
          <h4 className='supportTitle'>{mentor.title}</h4>
        </div>
        <Button className='editButton' componentClass={Link} href='/mentors/:id/edit' to={`/mentors/${id}/edit`}>Edit {mentor.first_name}</Button>
        <br/>
        <button className='editButton2' onClick={() => this.handleDelete()}>DELETE MENTOR</button>
      </div>
    )
  }

  handleDelete () {
    const { match, history } = this.props;
    const { id } = match.params;
    axios.put(`/api/mentors/changestatus/${id}`).then(res => {
      history.push('/support');
    });
  }

  componentDidMount () {
    const {id} = this.props.match.params;
    axios.get(`/api/mentors/${id}`).then(res => {
      this.setState({mentor: res.data, loading: false});
    })
  }

}

export default Mentor;
