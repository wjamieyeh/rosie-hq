//Karla
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Managers from './Managers.js';
import Mentors from './Mentors.js';
import Buddies from './Buddies.js';

class SupportTeam extends Component {

  render () {
    return (

          <div className='supportTeam'>
            <h3 className='supportText'>ROSIE SUPPORT TEAM</h3>
            <Grid>
              <Row className='supportGrid'>
              <Col className='supportCol1' xs={12} md={4}>
                <Managers className='supportClick'/>
              </Col>
              <Col className='supportCol2' xs={12} md={4}>
                <Mentors className='supportClick' />
              </Col>
              <Col className='supportCol3' xs={12} md={4}>
                <Buddies className='supportClick' />
              </Col>
            </Row>
          </Grid>

        </div>
    )
  }

}

export default SupportTeam;
