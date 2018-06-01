import React from 'react';
import axios from 'axios';
import { FormGroup, ControlLabel, FormControl, Form, Button } from 'react-bootstrap';


class NewRosie extends React.Component {
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = { rosie_id: 0, first_name: '', last_name: '', active: true, classof: 0 };
  }

  render () {

    // const { first_name, last_name, active, classof } = this.state;

    return (
      <div className="managerNew">
        <h2 className='rosieTitle'>ADD A ROSIE</h2>
        <Form inline>
          <FormGroup controlId="formInlineFirstName">
            <ControlLabel>FIRST NAME</ControlLabel><br/>{' '}
            <FormControl
              type="text"
              name="first_name"
              value={this.state.value}
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
              value={this.state.value}
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
              value={this.state.value}
              placeholder="class"
              autoComplete='class'
              onChange={this.handleChange}
            />
          </FormGroup>{' '}<br/><br/>
          {/* <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select</ControlLabel>{' '}
            <FormControl
              componentClass="select"
              name="classof"
              placeholder="select">
              <option value={this.state.value}>2019</option>
              <option value="other">2018</option>
            </FormControl>
          </FormGroup>{' '} */}

          <Button className='managerButton' onClick={this.handleSubmit} type="submit">Submit</Button>
        </Form>
      </div>
    )
  }

  handleChange (e) {
    const {value, name} = e.target;
    this.setState({ [name]: value });
  }

  // getValidationState() {
  //   const length = this.state.value.length;
  //   if (length > 10) return 'success';
  //   else if (length > 5) return 'warning';
  //   else if (length > 0) return 'error';
  //   return null;
  // }

  handleSubmit (e) {
    e.preventDefault();
    const { first_name, last_name, active, classof } = this.state;
      axios.post(`/api/rosies`, { first_name, last_name, active, classof }).then(res => {
        this.props.history.push('/rosies');
      }).catch((error) => {
        alert('create new rosie failed');
      })
  }

}

export default NewRosie;
