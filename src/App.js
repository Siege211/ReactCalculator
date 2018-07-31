import React, { Component } from 'react';
import './App.css';
import styleObject from './calculatorCSS.js'
import Calculator from './calculator.js'
// regex for checking if input ends in operator:
// && !this.state.input.test(/[\*/+-]$/)
class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      style: styleObject,
      input: '0',
      output: 0
    }
    this.updateInput= this.updateInput.bind(this);
    this.updateOutput= this.updateOutput.bind(this);
  }
  reset = () => {
    this.setState({
      input: '0',
      output: 0
    })
  }
  updateInput =(value) => {
 if(!/\.\d{1,99}(?![\*+-/])/.test(this.state.input) || !/\./.test(value)){
    if(!/[\*/+-\.]$/.test(this.state.input) || !/[\*/+-\.]/.test(value)) {
      if (this.state.input !== '0')
        {this.setState({
          input: (this.state.input + value)
        })
      }
      else {this.setState({input: value})} 
      }
    } 
    }
  updateOutput = () => {
    let expression = this.state.input;
    if (!/[\*+-/]$/.test(expression)) {
      let calculated = eval(expression);
      this.setState({
        input: calculated.toString(),
        output: calculated
      })
    }  
  }
  render() {
    return (
      <div className="App">
        <body>
          <Calculator 
           input={this.state.input}
           output={this.state.output}
            style={styleObject}
            updateInput={this.updateInput}
            updateOutput={this.updateOutput}
            reset={this.reset}
            >
          </Calculator>
          
        </body>

      </div>
    );
  }
}

export default App;
