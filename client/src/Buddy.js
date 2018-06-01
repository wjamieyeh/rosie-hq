//Karla
import React, { Component } from 'react';
import axios from 'axios';
import { Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Buddy extends Component {
  constructor(props) {
    super(props);
    this.state = {buddy: null, loading: true};
  }
  render () {
    const { buddy, loading } = this.state;
    const {id} = this.props.match.params;
    if(loading) {
      return <div>Loading...</div>;
    }
    return (
      <div className = 'buddy'>
        <h3 className='learnMore'>Learn more about {buddy.first_name}!</h3>
        <Image className='supportPic' width='120px' src={buddy.photo_link}/>
        <div className='supportInfo'>
          <h2 className='suppName'>{buddy.first_name}{' '}{buddy.last_name}</h2>
          <h4 className='supportTitle'>{buddy.title}</h4>
        </div>
        <Button className='editButton' componentClass={Link} href='/buddies/:id/edit' to={`/buddies/${id}/edit`}>Edit {buddy.first_name}</Button>
        <br/>
        <button className='editButton2' onClick={() => this.handleDelete()}>DELETE BUDDY</button>
      </div>
    )
  }

  handleDelete () {
    const { match, history } = this.props;
    const { id } = match.params;
    axios.put(`/api/buddies/changestatus/${id}`).then(res => {
      history.push('/support');
    });
  }

  componentDidMount () {
    const {id} = this.props.match.params;
    axios.get(`/api/buddies/${id}`).then(res => {
      this.setState({buddy: res.data, loading: false});
    })
  }

}

export default Buddy;
