//Jamie
import React, { Component } from 'react';
import { Well } from 'react-bootstrap';

class Home extends Component {

  render () {

    return (
      <div className="home">

        <Well className='homeWell' bsSize="small">
          <h2>Welcome to Rosie HQ</h2>
          <p>
            Welcome to <strong>Rosie Headquarters</strong>, a site dedicated to the <strong>CODE: Rosie Community</strong>!
          </p>
        </Well>

        <div className='homeContainer'>
          <img className="rosieLogo" src="./rosie.png" width='200px' alt="Minnie"></img>
          <div className='overlayHome'>
            <img className="nikkiPhoto" src="./nikki-katz.jpg" width='70px' alt="Minnie"></img>
            <div className='homeText'>
              To Nikki Katz, without whom this program would not exist.
              From every Rosie past and present - thank you.
            </div>

          </div>
        </div>
      </div>
    );
  }


}

export default Home;
