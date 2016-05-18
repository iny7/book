require('styles/student.css');

import React from 'react';

import Switch from './grain/Switch';
import Button from './grain/Button';

/*注意在不用Flux的情况下,向this.props.children传props的方法*/
class SearchBar extends React.Component {
	
	constructor(props, context) {
	    super(props, context);
	}
	
	render() {

		const { text, placeholder, handleChange, handleSubmit,
				value, switchOn, switchOff, switchStatus  } = this.props;

	    return (
	    	<div className="toolBar">
    			<input 
    				type="text" 
    				placeholder={placeholder}
    				value={text}
    				onChange={handleChange}
    				onKeyDown={handleSubmit}
    			/>
    			<Button clickHandler={handleSubmit} value="搜索"/>
    			<Switch 
    				value={value}
    				on={switchOn}
    				off={switchOff}
    				status={switchStatus}
    			/>
	    	</div>
	      
	    );
	}
}

export default SearchBar