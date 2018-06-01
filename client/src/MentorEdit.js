//Karla
import React, {Component} from 'react';
import axios from 'axios';
import MultiSelectField from './ManagerMultiSelect.js';

class MentorEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {first_name: '', last_name: '', title: '', rosies: null, loading: true, active: true};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onUpdate=this.onUpdate.bind(this)

  }

  render () {
    const {first_name, last_name, title, rosies, loading} = this.state;
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
      <h2>Edit this Mentor</h2>
      <div className='supportEdit'>
        FIRST NAME: <input value={first_name} className='input' name='first_name' onChange={this.handleChange} placeholder={first_name} />
        <br/>
        LAST NAME: <input value={last_name} className='input' name='last_name' onChange={this.handleChange} placeholder={last_name} />
        <br/>
        TITLE: <input value={title} className='input' name='title' onChange={this.handleChange} placeholder={title} />
        <br/>
        {/* ROSIES: <input value={rosies} className='input' name='rosies' placeholder='Rosies' onChange={this.handleChange} />
        <br/> */}
        <br/>
        <MultiSelectField className='supportToggle' onUpdate={this.onUpdate} rosieArray={rosies}/>
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


  onUpdate (value) {
    this.setState({ value: value });
  }


  handleSubmit () {
    const {id} = this.props.match.params;
    const {first_name, last_name, active, title, value} = this.state;
    const rosies = (value == null)? this.state.rosies: value.split(",");
    axios.put(`/api/mentors/${id}`, {first_name, last_name, active, title, rosies}).then(res => {
      this.props.history.push(`/support`);
    }).catch((error) => {
      alert('Something Went Wrong');
    });
  }

  componentDidMount () {
    const {id} = this.props.match.params;
    axios.get(`/api/mentors/${id}`).then(res => {
      const {first_name, last_name, active, title, rosies} = res.data;
      this.setState({first_name, last_name, active, title, rosies, loading: false});
    });
  }

}
export default MentorEdit;
