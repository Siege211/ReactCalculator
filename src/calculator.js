import React from 'react';
import Button from './button.js';
import Display from './components/display.js';

 const Calculator = (props) => {
	
		return(
			<div style={props.style}>
				<Display
				input={props.input}
				output={props.output}>
				</Display>
				<Button
				updateInput={props.updateInput}
				updateOutput={props.updateOutput}
				reset={props.reset}></Button>
			</div>
		)
	
}

export default Calculator;