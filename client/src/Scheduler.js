//jenn

import React, { Component } from 'react';
import socket from './socket.js';
// import { PageHeader, Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Col, Row } from 'react-bootstrap';


class Scheduler extends Component {
  constructor (props) {
    super(props);
      this.state = {messages: [], myName: '', myText: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    render () {
      const { messages, myText, myName } = this.state;

      return (
        <div className='fullScheduler'>
          <h4 className='scheduleLabel'>COMMUNICATE</h4>
          <br/>
          <input className='myName' name='myName' value={myName} onChange={this.handleChange} placeholder='Rosie Name'/>
          <br/><br/>
          <textarea className='myText' name='myText' value={myText} onChange={this.handleChange} placeholder='Comments' rows="4" cols="30"/>
          <br/>
          <button className='scheduleButton' onClick={this.handleSubmit} disabled={!myText}>SUBMIT</button>
          <br/>
          <h6 className='messageLabel'>MESSAGES</h6>
          <div>
            <ul className='messagesAll'>
              {messages.map(msg => this.renderMessage(msg))}
            </ul>
          </div>
        </div>
      );
    }

    handleChange (event) {
      const { name, value } = event.target;
      this.setState({[name]: value});
    }

    renderMessage (message) {
      const { name, text, id } = message;
      return (
        <div key={id}>
          {name || 'Random Rosie'}: {text}
          <button className='deleteButton' onClick={() => this.handleDelete(message)}>x</button>
        </div>
      );
    }

    handleDelete (message) {
      socket.emit('send-delete-message', message.id);
    }

    handleSubmit () {
      const { myName, myText } = this.state;
      const newMessage = {name: myName, text: myText};
      socket.emit('send-message', newMessage);
      this.setState({myText: ''});
    }

    componentDidMount () {
      socket.on('get-message', newMessage => {
        this.setState(prev => {
          return {messages: prev.messages.concat(newMessage)}
        });
      });

      socket.on('get-delete-message', messageId => {
        this.setState(prev => {
          const messages = prev.messages.filter(m => m.id !== messageId);
          return {messages};
        });
      });
    }

    componentWillUnmount () {
      socket.removeListener('get-message');
      socket.removeListener('get-delete-message');
    }
  }

  export default Scheduler;
