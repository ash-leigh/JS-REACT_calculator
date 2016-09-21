var React = require('react');

var CalculatorDisplay = React.createClass({
  
  render: function(){
    return(
      <div className='col-6'>
        <div className='display'>
          <input type='text'></input>
        </div>
      </div>
    )
  }

})

module.exports = CalculatorDisplay;