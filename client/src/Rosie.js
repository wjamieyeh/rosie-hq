//Jamie
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Label, Button } from 'react-bootstrap';


class Rosie extends Component {

  // const objManager = { thai: 2, aaron: 1, katie: 4, calvin: 3 };

  constructor(props) {
    super(props);
    this.state = {rosie: [], supervisor: [], manager: [], buddy: [], mentor: [], manager_id: 0, buddy_id: 0, mentor_id: 0,
                  objManager : { '573150': 4, '181401': 2, '730364': 1, '39966': 3}};
  }

  render () {
    const { rosie, supervisor, buddy, mentor, buddy_id, mentor_id, objManager } = this.state;

    if (!rosie) {
      return <div className="rosie">Loading...</div>;
    }

    return (

      <div className="singleRosie">
          <Row className="rowOne">
            <Col xs={3} md={8}>
              <h1 className='rosieName'><Label className='rosieLabel'>{rosie.first_name}</Label></h1>
              <Image className='rosiePic2' width='200px' src={rosie.photo_link}/>
            </Col>

            <Col xs={4} md={4}>
              <h3 className='rosieInfo'>{rosie.first_name}'s Profile: </h3>
                <div className='rosieInfo2'>
                  Class: {rosie.classof}
                  <br/>
                  Name: {rosie.first_name} {rosie.last_name}
                  <br/>
                  Hometown: {rosie.hometown}
                  <br/>
                  Title: {rosie.title}
                  <br/>
                  Manager: <Link href="/managers/:id" to={`/managers/${objManager[`${supervisor.pernr}`]}`}>{supervisor.full_name}</Link>
                  <br/>
                  Buddy: <Link href="/buddies/:id" to={`/buddies/${buddy_id}`}>{buddy.first_name} {buddy.last_name}</Link>
                  <br/>
                  Mentor: <Link href="/mentors/:id" to={`/mentors/${mentor_id}`}>{mentor.first_name} {mentor.last_name}</Link>
                  <br/>
                    <Button className='editButton3' componentClass={Link} href="/rosies/:id/edit" to={`/rosies/${rosie.rosie_id}/edit`}>Edit Profile</Button>
                </div>
            </Col>
          </Row>
      </div>
    );
  }

  componentDidMount () {
    const { id } = this.props.match.params;
    axios.get(`/api/rosies/${id}`).then(res => {
      this.setState({rosie: res.data, supervisor: res.data.supervisor});
    });
    axios.get(`/api/managers/rosie-manager/${id}`).then(res => {
      this.setState({manager: res.data});
    });
    axios.get(`/api/buddies/rosie-buddy/${id}`).then(res => {
      this.setState({buddy: res.data[0], buddy_id: res.data[0].buddy_id});
    });
    axios.get(`/api/mentors/rosie-mentor/${id}`).then(res => {
      this.setState({mentor: res.data[0], mentor_id: res.data[0].mentor_id});
    });
  }

}

export default Rosie;
