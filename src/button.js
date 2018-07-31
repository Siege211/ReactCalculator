import React from 'react';
import buttonStyleObj from './buttonStyles.js';
const Button = (props) => {
	return (
		<div id='buttonBox'>
			<div style={buttonStyleObj}
			onClick={()=>props.updateInput('7')}>
			7
			</div>
			<div style={buttonStyleObj}
			onClick={()=>props.updateInput('8')}>
			8
			</div>
			<div style={buttonStyleObj}
			onClick={()=>props.updateInput('9')}>
			9
			</div>
			<div style={buttonStyleObj}
			onClick={()=>props.updateInput('/')}>
			/
			</div>
			<div style={buttonStyleObj}
			onClick={()=>props.updateInput('4')}>
			4
			</div>
			<div style={buttonStyleObj}
			onClick={()=>props.updateInput('5')}>
			5
			</div>
			<div style={buttonStyleObj}
			onClick={()=>props.updateInput('6')}>
			6
			</div>
			<div style={buttonStyleObj}
			onClick={()=>props.updateInput('*')}>
			*
			</div>
			<div style={buttonStyleObj}
			onClick={()=>props.updateInput('1')}>
			1
			</div>
			<div style={buttonStyleObj}
			onClick={()=>props.updateInput('2')}>
			2
			</div>
			<div style={buttonStyleObj}
			onClick={()=>props.updateInput('3')}>
			3
			</div>
			<div style={buttonStyleObj}
			onClick={()=>props.updateInput('+')}>
			+
			</div>
			<div style={buttonStyleObj}
			onClick={()=>props.updateInput('0')}>
			0
			</div>
			<div style={buttonStyleObj}
			onClick={()=>props.updateInput('.')}>
			.
			</div>
			<div style={buttonStyleObj}
			onClick={()=>props.updateOutput()}>
			=
			</div>
			<div style={buttonStyleObj}
			onClick={()=>props.updateInput('-')}>
			-
			</div>
			<div 
			id="AC"
			style={buttonStyleObj}
			onClick={()=>props.reset()}>
			AC
			</div>
			<p>React Calculator by Thomas Siegel</p>
		</div>
	)
}

export default Button