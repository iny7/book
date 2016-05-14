require('./style/switch.css')

import React from 'react';

class Switch extends React.Component{
	constructor(props, context) {
	    super(props, context);
	}

	render() {
		return (
			<div className="switch">
				<input type="radio" name="switch" id="on" defaultChecked={true}/>
				<label htmlFor="on">{this.props.value[0]}</label>
				<input type="radio" name="switch" id="off"/>
				<label htmlFor="off">{this.props.value[1]}</label>
			</div>
		)
	}
}
Switch.defaultProps = {
};
export default Switch;