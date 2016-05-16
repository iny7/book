require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
	
	render() {
		const { books, actions } = this.props
		console.log(books)
	    return (
	      <div className="index">
	      	{this.props.children}
	      </div>
	    );
	}
}

AppComponent.defaultProps = {
};

export default AppComponent;
