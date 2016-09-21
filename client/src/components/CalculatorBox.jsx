var React = require('react');
var CalculatorDisplay = require('./CalculatorDisplay');
var CalculatorKeyboard = require('./CalculatorKeyboard');

var CalculatorBox = React.createClass({
  getInitialState: function(){
    return {
      query: [];
    }
  },

  handleKeyboardClick: function(){

  },

  handleEqualsClick: function(){
    
  },

  render: function(){
    return(
      <div className='calc-box'>
        <div className='col-6'>
          <CalculatorDisplay />
        </div>
        <div className='col-6'>
          <CalculatorKeyboard handleClick={this.handleKeyboardClick} handleSubmit={this.handleEqualsClick}/>
        </div>
      </div>
    )
  }

})

module.exports = CalculatorBox;