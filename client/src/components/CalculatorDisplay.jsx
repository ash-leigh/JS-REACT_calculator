var React = require('react');

var CalculatorDisplay = React.createClass({

  handleOnChange: function(e){
    var typedChar = e.target.value.substr(e.target.value.length - 1);
    this.props.handleOnChange(typedChar);
  },
  
  render: function(){
    return(
      <div className='col-6'>
        <textarea className='display' value={this.props.query} onChange={this.handleOnChange}></textarea>
        <div className='result'>{this.props.result}</div>
      </div>
    )
  }

})

module.exports = CalculatorDisplay;