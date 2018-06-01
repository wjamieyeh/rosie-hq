//Jamie
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Label, Button } from 'react-bootstrap';


class FormerRosieProfile extends Component {


  constructor(props) {
    super(props);
    this.state = {rosie: [] };
  }

  render () {
    const { rosie } = this.state;

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
  }
}

export default FormerRosieProfile;
