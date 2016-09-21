var React = require('react');

var CalculatorKeyboard = React.createClass({

  handleClick: function(e){
    console.log(e.target.value);
    this.props.handleClick(e.target.value);
  },

  handleSubmit: function(){
    this.props.handleSubmit();
  },

  render: function(){
    return(
      <div className='col-6 keyboard'>
        <div className='row'>
          <button className='col-3' onClick={this.handleClick} value='7'>7</button>
          <button className='col-3' onClick={this.handleClick} value='8'>8</button>
          <button className='col-3' onClick={this.handleClick} value='9'>9</button>
          <button className='col-3' onClick={this.handleClick} value='/'>÷</button>
        </div>
        <div className='row'>
          <button className='col-3' onClick={this.handleClick} value='4'>4</button>
          <button className='col-3' onClick={this.handleClick} value='5'>5</button>
          <button className='col-3' onClick={this.handleClick} value='6'>6</button>
          <button className='col-3' onClick={this.handleClick} value='*'>x</button>
        </div>
        <div className='row'>
          <button className='col-3' onClick={this.handleClick} value='1'>1</button>
          <button className='col-3' onClick={this.handleClick} value='2'>2</button>
          <button className='col-3' onClick={this.handleClick} value='3'>3</button>
          <button className='col-3' onClick={this.handleClick} value='-'>-</button>
        </div>
        <div className='row'>
          <button className='col-3' onClick={this.handleClick} value='0'>0</button>
          <button className='col-3' onClick={this.handleClick} value='.'>.</button>
          <button className='col-3' onClick={this.handleSubmit} value='='>=</button>
          <button className='col-3' onClick={this.handleClick} value='+'>+</button>
        </div>
      </div>
    )
  }

})

module.exports = CalculatorKeyboard;