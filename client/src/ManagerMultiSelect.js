import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';
import axios from 'axios';

var MultiSelectField = createClass({

	displayName: 'MultiSelectField',

	propTypes: {
		label: PropTypes.string,
	},

	getInitialState () {
		return {
			removeSelected: true,
			disabled: false,
			stayOpen: false,
			value: [this.props.rosieArray].toString(),
			rtl: true,
			clearable: false
		};
	},
	componentDidMount () {
		axios.get('/api/rosies/rosiesformulti').then(res => {
			this.setState({people: res.data})
		})
	},

handleChange(value) {
  console.log('You\'ve selected:', value);
  this.setState({value});
  this.props.onUpdate(value);
},


	render () {

		const { disabled, stayOpen, value,clearable } = this.state;
		const options = this.state.people
		return (
			<div className="section">
				<h3 className="sectionHeading">ROSIES</h3>
				<Select
					closeOnSelect={stayOpen}
					disabled={disabled}
					multi
					onChange={this.handleChange}
					options={options}
					placeholder="Select Rosies"
          removeSelected={this.state.removeSelected}
					rtl={this.state.rtl}
					simpleValue
					value={value}
					clearable={clearable}
				/>

				</div>

		);
	}
});

export default MultiSelectField;
