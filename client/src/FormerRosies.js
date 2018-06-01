//Karla Jamie
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Col, Thumbnail } from 'react-bootstrap';


class FormerRosies extends Component {
  constructor(props) {
    super(props);
    this.state = {rosies: [] };
  }
  render() {
    const { rosies } = this.state;
    const formerRosie = rosies.filter(rosie => rosie.active === false).sort(function(a, b){return b-a});
    return (
      <div className='rosies'>
        <h2 className='rosieTitle'>FORMER ROSIES</h2>

        {/* <div className='formerContainer'>
          <ButtonToolbar>
            <DropdownButton eventKey={3} className='formerButton' bsSize='medium' title='Search Former Rosies' id='dropdown-size-large'>
              <MenuItem eventKey={3.1} componentClass={Link} href='#' to='#'>Class of 2016</MenuItem>
              <MenuItem eventKey={3.2} componentClass={Link} href='#' to='#'>Class of 2013</MenuItem>
              <MenuItem eventKey={3.3} componentClass={Link} href='/formerrosies' to='/formerrosies'>All Former Rosies</MenuItem>
            </DropdownButton>
          </ButtonToolbar>
          <br/>
        </div> */}

        <ul>
          {formerRosie.map(rosie => this.renderRosie(rosie))}
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
            href="/formerrosies/:id" to={`/formerrosies/${rosie.rosie_id}`}/>
            <div className='overlayElement'>
              <div className='middleText'>
                {rosie.first_name}<br/>{rosie.last_name}
              </div>
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

export default FormerRosies;
