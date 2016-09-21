var assert = require('assert');
var QueryCheck = require('../queryCheck');

describe('Query Check', function(){

  beforeEach(function(){
    queryCheck = new QueryCheck();
  });

  it('should be able to return query array', function(){
    queryCheck.addToQuery('2');
    queryCheck.addToQuery('+');
    queryCheck.addToQuery('3');
    queryCheck.addToQuery('&');
    var test = queryCheck.query;
    assert.equal(test.length, 3);
  });

  it('should be an empty query at start', function(){
    assert.equal(queryCheck.query.length, 0);
  });

  it('should be able to return proceeding char', function(){
    queryCheck.addToQuery('2');
    assert.equal(queryCheck.proceedingChar(), '2');
  });

  it('should be able to preform a check on numbers and decimals - truthy', function(){
    queryCheck.addToQuery('.');
    assert.equal(queryCheck.addToProceedingCharCheck(), true);
  });

  it('should be able to preform a check on numbers and decimals - falsy', function(){
    queryCheck.addToQuery('/');
    assert.equal(queryCheck.addToProceedingCharCheck(), false);
  });

  it('should be able to construct decimals', function(){
    queryCheck.addToQuery('2');
    queryCheck.addToQuery('+');
    queryCheck.addToQuery('3');
    queryCheck.addToQuery('1');
    queryCheck.addToQuery('.');
    queryCheck.addToQuery('2');
    assert.equal('31.2', queryCheck.query[2]);
  });

  it('should be able to add to query', function(){
    queryCheck.addToQuery('2');
    assert.equal(queryCheck.query.length, 1);
  });

  it('should return true if query was added', function(){
    assert.equal(queryCheck.addToQuery('2'), true);
  });

  it('should not be able to add to query if character is invalid', function(){
    queryCheck.addToQuery('$');
    assert.equal(queryCheck.query.length, 0);
  });

  it('should return false if query was not added', function(){
    assert.equal(queryCheck.addToQuery('£'), false);
  });

  it('should return false for non numbers', function(){
    assert.equal(queryCheck.checkNumber('@'), false);
  });

  it('should return true for numbers', function(){
    assert.equal(queryCheck.checkNumber('1'), true);
  });

  it('should return false for non operators', function(){
    assert.equal(queryCheck.checkOperator('@'), false);
  });

  it('should return true for operators', function(){
    assert.equal(queryCheck.checkOperator('/'), true);
  });

  it('should return false if character is neither number nor operator', function(){
    assert.equal(queryCheck.checkIllegalCharacters('@'), false);
  });

  it('should return true if character is number', function(){
    assert.equal(queryCheck.checkIllegalCharacters('1'), true);
  });

  it('should return true if character is operator', function(){
    assert.equal(queryCheck.checkIllegalCharacters('/'), true);
  });

});
