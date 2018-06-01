import React, { Component } from 'react';
import axios from 'axios';
import { FormGroup, ControlLabel, FormControl, Form, Button } from 'react-bootstrap';

class RosieEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { first_name: '', last_name: '', active: true, classof: 0 , hometown: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render () {
    const { first_name, last_name, classof, hometown } = this.state;

    return (

      <div className="rosieEdit">
        <h2 className='rosieTitle'>Profile Edit</h2>
        <Form inline>
          <FormGroup controlId="formInlineFirstName">
            <ControlLabel>FIRST NAME</ControlLabel><br/>{' '}
            <FormControl
              type="text"
              name="first_name"
              value={first_name}
              placeholder="First Name"
              autoComplete='first_name'
              onChange={this.handleChange}
            />
          </FormGroup>{' '}<br/><br/>
          <FormGroup controlId="formInlineLastName">
            <ControlLabel>LAST NAME</ControlLabel><br/>{' '}
            <FormControl
              type="text"
              name="last_name"
              value={last_name}
              placeholder="Last Name"
              autoComplete='last_name'
              onChange={this.handleChange}
            />
          </FormGroup>{' '}<br/><br/>
          <FormGroup controlId="formInlineClassof">
            <ControlLabel>CLASS OF</ControlLabel><br/>{' '}
            <FormControl
              type="text"
              name="classof"
              value={classof}
              placeholder="classof"
              autoComplete='classof'
              onChange={this.handleChange}
            />
          </FormGroup>{' '}<br/><br/>



          <Button className='rosieButton' onClick={this.handleSubmit} type="submit">Submit</Button>
        </Form>
      </div>
    );
  }

  handleChange (e) {
    const {value, name} = e.target;
    this.setState({[name]: value});
  }

  handleSubmit (e) {
    e.preventDefault();
    const { id }  = this.props.match.params;
    const {first_name, last_name, classof} = this.state;
    axios.put(`/api/rosies/smallupdate/${id}`, {first_name, last_name, classof}).then(res => {
      this.props.history.push(`/rosies`);
    }).catch((error) => {
      alert('Unable to Update');
    });
  }

  componentDidMount () {
    const { id } = this.props.match.params;
    axios.get(`/api/rosies/${id}`).then(res => {
      const {first_name, last_name, active, classof, hometown} = res.data;
      this.setState({first_name, last_name, active, classof, hometown});
    });
  }
}

export default RosieEdit;
