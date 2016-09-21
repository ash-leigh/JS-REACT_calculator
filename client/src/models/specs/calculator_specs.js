var assert = require('assert');
var Calculator = require('../calculator');
var QueryCheck = require('../queryCheck');

describe('Calculator', function(){

  beforeEach(function(){
    queryCheck = new QueryCheck();
    queryCheck.addToQuery('2');
    queryCheck.addToQuery('.');
    queryCheck.addToQuery('1');
    queryCheck.addToQuery('*');
    queryCheck.addToQuery('2');
    queryCheck.addToQuery('&');
    queryCheck.addToQuery('5');
    queryCheck.addToQuery('/');
    queryCheck.addToQuery('2');
    queryCheck.addToQuery('+');
    queryCheck.addToQuery('10');
    calculator = new Calculator(queryCheck.query);
  });

  it('should take in a query', function(){
    assert.equal(calculator.query.length, 7);
  });

  it('should calculate', function(){
    assert.equal(calculator.calculate(), 36.25);
  }); 

  it('should return true if division or multiplication is present', function(){
    assert.equal(calculator.DMCheck(), true);
  });

  it('should return true if addition or subtraction is present', function(){
    assert.equal(calculator.ASCheck(), true);
  });

  it('should split on DM', function(){
    calculator.splitOnDM();
    assert.equal(calculator.query.length, 5);
  });

  it('should split on AS', function(){
    calculator.splitOnAS();
    assert.equal(calculator.query.length, 1);
  });

  it('should add two numbers', function(){
    assert.equal(calculator.ASSum('+', 2, 2), 4);
  });

  it('should subtract one number from the other', function(){
    assert.equal(calculator.ASSum('-', 5, 2), 3);
  });

  it('should multiply two numbers', function(){
    assert.equal(calculator.DMSum('*', 2, 3), 6);
  });

  it('should divide one number by the other', function(){
    assert.equal(calculator.DMSum('/', 10, 2), 5);
  });

});
