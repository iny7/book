require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import LoginBox from './LoginBox'

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
      	<LoginBox />
        
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
