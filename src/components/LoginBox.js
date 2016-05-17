require('normalize.css/normalize.css');
require('styles/loginBox.css');

import React from 'react';
import userData from '../data/users'

// let yeomanImage = require('../images/yeoman.png');

class LoginBox extends React.Component {
	//in ES6, you can not use getIntialState() {} to initial react component
	constructor(props, context) {
	    super(props, context);
	}
	/*React v0.12 中，事件处理程序返回 false 不再停止事件传播，
	    取而代之，应该根据需要手动触发 e.stopPropagation() 或 
	    e.preventDefault()。*/
	//FE Validate
	validate(e) {
		e.preventDefault();
		
		var name = userData.username;
		var pass = userData.password;
		var inputName = this.refs.username.value;
		var inputPass = this.refs.password.value;

		if(name != inputName){
			this.setState({
				code : 0
			})
		}else if(pass != inputPass){
			this.setState({
				code : -1
			})
		}else{
			this.setState({
				code : 1
			})
			
			//BEValidate
			this.props.validate();
		}
	}
	

	render() {
		var code = this.state && this.state.code;
	    return (
	    	<section className="loginBox">
	    		<header className="login-title">Login Box</header>
		      	<form action="./test.html"className="login-content" onSubmit={this.validate.bind(this)}>
		      		<div className="form-control">
		      			<label htmlFor="username">username</label>
						<input type="text" id="username" ref="username"/>
		      		</div>
		      		{code === 0 ? <p className="errorMsg">user not found</p> : ''}
		      		
		      		<div className="form-control">
		      			<label htmlFor="password">password</label>
		      			<input type="password" id="password" ref="password"/>
		      		</div>
		      		{code === -1 ? <p className="errorMsg">password error</p> : ''}
		      		<div className="btn-group">
						<input type="submit" className="btn" value="login" />
						<button className="btn">registry</button>
		      		</div>
		      	</form>
		    </section>
	      
	    );
	}
}

export default LoginBox;
