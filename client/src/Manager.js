//Karla
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Image, Button } from 'react-bootstrap';


class Manager extends Component {
  constructor(props) {
    super(props);
    this.state = {manager: null, loading: true};
  }
  render () {
    const { manager, loading } = this.state;
    const {id} = this.props.match.params;
    if(loading) {
      return <div>Loading...</div>;
    }
    return (
      <div className = 'manager'>
        <h3 className='learnMore'>Learn more about {manager.first_name}!</h3>
        <Image className='supportPic' width='120px' src={manager.photo_link}/>
        <div className='supportInfo'>
          <h2 className='suppName'>{manager.first_name}{' '}{manager.last_name}</h2>
          <h4 className='supportTitle'>{manager.title}</h4>
      </div>
        <Button className='editButton' componentClass={Link} href='/managers/:id/edit' to={`/managers/${id}/edit`}>Edit {manager.first_name}</Button>
        <br/>
        <Button className='editButton2' onClick={() => this.handleDelete()}>DELETE MANAGER</Button>
      </div>
    )
  }

  handleDelete () {
    const { match, history } = this.props;
    const { id } = match.params;
    axios.put(`/api/managers/changestatus/${id}`).then(res => {
      history.push('/support');
    });
  }

  componentDidMount () {
    const {id} = this.props.match.params;
    axios.get(`/api/managers/${id}`).then(res => {
      this.setState({manager: res.data, loading: false});
    })
  }

}

export default Manager;
