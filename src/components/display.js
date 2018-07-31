import React from 'react';
	const Display =(props) => {
			return (
				<div id='display'>
					<div id='input'>{props.input}</div>
					<div>{props.output}</div>
				</div>
			)
		}
	
export default Display;