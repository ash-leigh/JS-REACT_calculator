var React = require('react');
var CalculatorDisplay = require('./CalculatorDisplay');
var CalculatorKeyboard = require('./CalculatorKeyboard');

var QueryCheck = require('../models/queryCheck');
var Calculator = require('../models/calculator');

var CalculatorBox = React.createClass({
  getInitialState: function(){
    return {queryCheck: new QueryCheck(), display: [], displayClass: 'display'}
  },

  checkQuery: function(char){
    return this.state.queryCheck.checkIllegalCharacters(char);
  },

  handleInput: function(char){
    if(!this.checkQuery(char)){
      this.setState({display: 'not valid character', displayClass: 'error'})
    }else{
      this.state.queryCheck.addToQuery(char);
      this.setState({display: this.state.queryCheck.query, displayClass: 'display'});
    }
  },

  handleEqualsClick: function(){
    var calculator = new Calculator(this.state.display);
    var result = calculator.calculate();
    this.state.queryCheck.clearQuery();
    this.setState({display: result});
  },

  render: function(){
    return(
      <div className='calc-box'>
      <div className='header'>JS React Calculator</div>
        <CalculatorDisplay display={this.state.display} handleOnChange={this.handleInput} class={this.state.displayClass} handleSubmit={this.handleEqualsClick} split={this.splitText}/>
        <CalculatorKeyboard handleClick={this.handleInput} handleSubmit={this.handleEqualsClick}/>
      </div>
    )
  }

})

module.exports = CalculatorBox;