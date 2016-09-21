var React = require('react');

var CalculatorDisplay = React.createClass({

  handleOnChange: function(e){
    this.props.handleOnChange(e.target.value);
  },
  
  render: function(){
    return(
      <div className='col-6'>
        <div className='display' contentEditable="true" onChange={this.handleOnChange}>{this.props.query}</div>
        <div className='result'>{this.props.result}</div>
      </div>
    )
  }

})

module.exports = CalculatorDisplay;