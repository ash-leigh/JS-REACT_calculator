var React = require('react');
var CalculatorDisplay = require('./CalculatorDisplay');
var CalculatorKeyboard = require('./CalculatorKeyboard');

var QueryCheck = require('../models/queryCheck');
var Calculator = require('../models/calculator');

var CalculatorBox = React.createClass({
  getInitialState: function(){
    return {queryCheck: new QueryCheck(), query: [], result: ''}
  },

  checkQuery: function(char){
    return this.state.queryCheck.checkIllegalCharacters(char);
  },

  handleInput: function(char){
    this.setState({result: ''})
    this.state.queryCheck.addToQuery(char);
    this.setState({query: this.state.queryCheck.query});
  },

  handleEqualsClick: function(){
    var calculator = new Calculator(this.state.query);
    var result = calculator.calculate();
    this.state.queryCheck.clearQuery();
    this.setState({result: result, query: []});
  },

  render: function(){
    return(
      <div className='calc-box'>
        <CalculatorDisplay query={this.state.query} result={this.state.result} handleOnChange={this.handleInput}/>
        <CalculatorKeyboard handleClick={this.handleInput} handleSubmit={this.handleEqualsClick}/>
      </div>
    )
  }

})

module.exports = CalculatorBox;