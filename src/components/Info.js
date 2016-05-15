require('normalize.css/normalize.css');
require('styles/loginBox.css');

import React from 'react';
import userData from '../data/users'

let yeomanImage = require('../images/yeoman.png');

class Info extends React.Component {
	//in ES6, you can not use getIntialState() {} to initial react component
	constructor(props, context) {
	    super(props, context);
	}

	render() {
		var code = this.state && this.state.code;
	    return (
	    	<section className="info">
	    		个人信息
		    </section>
	      
	    );
	}
}

export default Info;
