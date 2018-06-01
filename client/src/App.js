//Jamie
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Rosies from './Rosies.js';
import Rosie from './Rosie.js';
import FormerRosies from './FormerRosies.js';
import FormerRosieProfile from './FormerRosieProfile.js';
import NewRosie from './NewRosie.js';
import RosieEdit from './RosieEdit.js';
import Home from './Home.js';
import Scheduler from './Scheduler.js';
import SupportTeam from './SupportTeamIndex.js';
import Manager from './Manager.js';
import ManagerEdit from './ManagerEdit.js';
import ManagerNew from './ManagerNew.js';
import Mentor from './Mentor.js';
import MentorEdit from './MentorEdit.js';
import MentorNew from './MentorNew.js';
import Buddy from './Buddy.js';
import BuddyEdit from './BuddyEdit.js';
import BuddyNew from './BuddyNew.js';
import Projects from './Projects.js';
import { PageHeader, Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Col, Row } from 'react-bootstrap';
import 'react-select/dist/react-select.css';


class App extends Component {

  render () {

    return (

      <Router>
        <div className='App'>

            <h1><PageHeader>ROSIE HQ</PageHeader></h1>


          <Navbar className="navbar navbar-dark bg-dark" bsStyle="inverse">
            <Nav>
              <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                HOME
              </NavItem>
              <NavDropdown eventKey={3} title="ROSIES" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1} componentClass={Link} href="/rosies" to="/rosies">Current Rosies</MenuItem>
                <MenuItem eventKey={3.2} componentClass={Link} href="/formerrosies" to="/formerrosies">Former Rosies</MenuItem>
              </NavDropdown>
              <NavItem eventKey={2} componentClass={Link} href="/support" to="/support">
                SUPPORT TEAM
              </NavItem>
              <NavItem eventKey={3} componentClass={Link} href='/projects' to='/projects'>
                PROJECTS
              </NavItem>
            </Nav>
          </Navbar>

          <hr/>

          <Grid>
            <Row className='show-grid'>
          <Col xs={12} md={8}>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/rosies' component={Rosies} />
              <Route exact path='/formerrosies' component={FormerRosies} />
              <Route exact path='/formerrosies/:id' component={FormerRosieProfile} />
              <Route exact path='/newrosie' component={NewRosie} />
              <Route exact path='/rosies/:id' component={Rosie} />
              <Route exact path='/rosies/:id/edit' component={RosieEdit} />
              <Route exact path='/support' component={SupportTeam} />
              <Route exact path='/managers/new' component={ManagerNew} />
              <Route exact path='/managers/:id' component={Manager} />
              <Route exact path='/managers/:id/edit' component={ManagerEdit} />
              <Route exact path='/mentors/new' component={MentorNew} />
              <Route exact path='/mentors/:id' component={Mentor} />
              <Route exact path='/mentors/:id/edit' component={MentorEdit} />
              <Route exact path='/buddies/new' component={BuddyNew} />
              <Route exact path='/buddies/:id' component={Buddy} />
              <Route exact path='/buddies/:id/edit' component={BuddyEdit} />
              <Route exact path='/projects' component={Projects} />
            </Switch>
          </Col>
          <Col xs={6} md={4}>
            <Scheduler/>
          </Col>
            </Row>
          </Grid>
          <br/>
          <hr/>
            <footer>
              A CODE: Rosie Production
            </footer>
            <hr/>
        </div>
      </Router>
    );
  }
}

export default App;
