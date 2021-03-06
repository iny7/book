require('./style/button.css')

import React from 'react';

class Button extends React.Component{
	constructor(props, context) {
	    super(props, context);
	}

	render() {
		return (
			<button onClick={this.props.clickHandler} className="btn">{this.props.value}</button>
		)
	}
}
Button.defaultProps = {
};
export default Button;