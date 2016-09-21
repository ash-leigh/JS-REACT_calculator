var React = require('react');
var CalculatorDisplay = require('./CalculatorDisplay');
var CalculatorKeyboard = require('./CalculatorKeyboard');

var CalculatorBox = React.createClass({

  render: function(){
    return(
      <div>
        <div className='col-6'>
          <CalculatorDisplay />
        </div>
        <div className='col-6'>
          <CalculatorKeyboard />
        </div>
      </div>
    )
  }

})

module.exports = CalculatorBox;