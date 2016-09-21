var React = require('react');

var CalculatorDisplay = React.createClass({
  
  render: function(){
    return(
      <div className='display'>
        <input type='text'></input>
      </div>
    )
  }

})

module.exports = CalculatorDisplay;