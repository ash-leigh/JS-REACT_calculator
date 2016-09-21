var Calculator = function(query){
  this.query = query;
};

Calculator.prototype = {
  
  calculate: function(){
    console.log(this.query)
    while(this.query.length > 1){
      if(this.DMCheck()){
        this.splitOnDM();
      }else if(this.ASCheck()){
        this.splitOnAS();
      }
    }
    console.log(this.query)
    return this.query[0];
  },
  
  DMCheck: function(){
    for(var i=0; i<this.query.length; i++){
      if(this.query[i] === '*' || this.query[i] === '/'){
        return true;
      }
    }
  },
  ASCheck: function(){
    for(var i=0; i<this.query.length; i++){
      if(this.query[i] === '+' || this.query[i] === '-'){
        return true;
      }
    }
  },
  splitOnDM: function(){
    var splitQuery = [];
    for(var i=0; i<this.query.length; i++){
      if(this.query[i] === '*' || this.query[i] === '/'){
        var result = this.DMSum(this.query[i], this.query[i-1], this.query[i+1]);
        splitQuery.push(result);
        for(var j=i+2; j<this.query.length; j++){
          splitQuery.push(this.query[j])
        }
        this.query = splitQuery;
        return;
      }
    }
  },
  splitOnAS: function(){
    var splitQuery = [];
    for(var i=0; i<this.query.length; i++){
      if(this.query[i] === '+' || this.query[i] === '-'){
        var result = this.ASSum(this.query[i], this.query[i-1], this.query[i+1]);
        splitQuery.push(result);
        for(var j=i+2; j<this.query.length; j++){
          splitQuery.push(this.query[j])
        }
        this.query = splitQuery;
        return;
      }
    }
  },

  DMSum: function(operator, num1, num2){
    if(operator === '*'){
      return parseFloat(num1) * parseFloat(num2);
    }else if(operator === '/'){
      return parseFloat(num1) / parseFloat(num2);
    }
  },

  ASSum: function(operator, num1, num2){
    if(operator === '+'){
      return parseFloat(num1) + parseFloat(num2);
    }else if(operator === '-'){
      return parseFloat(num1) - parseFloat(num2);
    }
  }

};

module.exports = Calculator;

