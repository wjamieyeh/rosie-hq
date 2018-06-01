//Karla Jamie
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Col, Thumbnail, Button } from 'react-bootstrap';


class Rosies extends Component {
  constructor(props) {
    super(props);
    this.state = {rosies: [] };
  }
  render() {
    const { rosies } = this.state;
    const currRosie = rosies.filter(rosie => rosie.active === true);

    return (
      <div className='rosies'>
        <h2 className='rosieTitle'>CURRENT ROSIES</h2>
        <Button className='addRosie' componentClass={Link} href="/newrosie" to="/newrosie">Add New Rosie</Button>
        <ul>
          {currRosie.map(rosie => this.renderRosie(rosie))}
        </ul>

      </div>
    )
  }

  renderRosie(rosie) {
    return(

      <li key={rosie.rosie_id}>
        <Col className='rosieCol' xs={6} md={4}>

          <div className='rosieContainer'>
            <Thumbnail className='rosiePic' src={rosie.photo_link} componentClass={Link}
              href="/rosies/:id" to={`/rosies/${rosie.rosie_id}`}/>
            <div className='overlayElement'>
              <div className='middleText'>{rosie.first_name}
                <br/>{rosie.last_name}</div>
            </div>
          </div>

        </Col>
      </li>

    );
  }

  componentDidMount () {
    axios.get('/api/rosies').then(res => {
      this.setState({rosies: res.data})
    })
  }

}


export default Rosies;
