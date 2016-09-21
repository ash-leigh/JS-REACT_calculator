var React = require('react');
var CalculatorDisplay = require('./CalculatorDisplay');
var CalculatorKeyboard = require('./CalculatorKeyboard');

var QueryCheck = require('../models/queryCheck');
var Calculator = require('../models/calculator');

var CalculatorBox = React.createClass({
  getInitialState: function(){
    return {queryCheck: new QueryCheck(), query: [], result: 0}
  },

  checkQuery: function(char){
    return this.state.queryCheck.checkIllegalCharacters(char);
  },

  handleKeyboardClick: function(char){
    this.state.queryCheck.addToQuery(char);
    this.setState({query: this.state.queryCheck.query});
  },

  handleEqualsClick: function(){
    var calculator = new Calculator(this.state.query);
    var result = calculator.calculate();
    this.setState({result: result, query: []});
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