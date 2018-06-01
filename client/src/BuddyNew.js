//Karla
import React, {Component} from 'react';
import axios from 'axios';

class BuddyNew extends Component {
  constructor(props) {
    super(props);
    this.state = {first_name: '', last_name: '', active: true, title: '', rosies: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render () {
    const {first_name, last_name, title, rosies} = this.state;
    return (
      <div>
        <h2>ADD A BUDDY</h2>
        <div className='managerNew'>
          FIRST NAME: <input value={first_name} className='input' name='first_name' placeholder='First name' onChange={this.handleChange} />
          <br/>
          LAST NAME: <input value={last_name} className='input' name='last_name' placeholder='Last name' onChange={this.handleChange} />
          <br/>
          TITLE: <input value={title} className='input' name='title' placeholder='Title' onChange={this.handleChange} />
          <br/>
          ROSIES: <input value={rosies} className='input' name='rosies' placeholder='Rosies' onChange={this.handleChange} />
          <br/>
          <button className='managerButton' onClick={this.handleSubmit}>SUBMIT</button>
        </div>
      </div>
    )
  }

  handleChange (e) {
    const {value, name} = e.target;
    this.setState({[name]: value});
  }

  handleSubmit () {
    const {first_name, last_name, active, title, rosies} = this.state;
    axios.post(`/api/buddies`, {first_name, last_name, active, title, rosies}).then(res => {
      this.props.history.push(`/support`);
    }).catch((error) => {
      alert('Something Went Wrong');
    })
  }

}
export default BuddyNew;
