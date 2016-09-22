var QueryCheck = function(){
  this.query = [];
  this.legalCharacters = ['+', '-', '*', '/']
};

QueryCheck.prototype = {
  proceedingChar: function(){
    return this.query[this.query.length-1];
  },

  addToProceedingCharCheck: function(){
    return this.checkNumber(this.proceedingChar()) || this.proceedingChar() === '.';
  },

  concatNumbers: function(char){
    var entryIndex = this.query.indexOf(this.proceedingChar());
    this.query[entryIndex] = this.query[entryIndex] + char;
  },

  addToQuery: function(char){
    if(this.checkIllegalCharacters(char)){
      if(this.addToProceedingCharCheck() && !this.checkOperator(char)){
        this.concatNumbers(char);
      }else{
        this.query.push(char);
      }
      return true;
    }
    return false;
  },

  checkIllegalCharacters: function(char){
    if(!this.checkNumber(char) && !this.checkOperator(char) && char != '.'){
      return false;
    }
    return true;
  },

  checkNumber: function(char){
    return !isNaN(parseFloat(char));
  },

  checkOperator: function(char){
    var check = false;
    for(var operator of this.legalCharacters){
      if(char === operator){
        check = true;
      }
    }
    return check;
  },
  clearQuery: function(){
    this.query = [];
  }

};

module.exports = QueryCheck; 