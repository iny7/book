require('./style/switch.css')

import React from 'react';

class Switch extends React.Component{
	constructor(props, context) {
	    super(props, context);
	}

	render() {
		const { value, on, off, status } = this.props
		return (
			<div className="switch">
				<input type="radio" name="switch" id="on" onChange={on} checked={status}/>
				<label htmlFor="on">{value[0]}</label>
				<input type="radio" name="switch" id="off" onChange={off} checked={!status}/>
				<label htmlFor="off">{value[1]}</label>
			</div>
		)
	}
}

Switch.propTypes = {
  value: React.PropTypes.array.isRequired,
  on: React.PropTypes.func.isRequired,
  off: React.PropTypes.func.isRequired
}
Switch.defaultProps = {
};
export default Switch;