require('styles/switch.css')

import React from 'react';

class Switch extends React.Component{
	constructor(props, context) {
	    super(props, context);
	}

	render() {
		return (
			<div className="switch">
				


				<input type="radio" name="sss" id="on" defaultChecked={true}/>
				<label htmlFor="on">on</label>
				<input type="radio" name="sss" id="off"/>
				<label htmlFor="off">off</label>
			</div>
		)
	}
}
Switch.defaultProps = {
};
export default Switch;