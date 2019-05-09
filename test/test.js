require('chai').should();

const balanced = require('../index.js');

describe('Basic Tests', function() {
  it('should return true if string is balanced', function() {
    balanced('()').should.be.true;
    balanced('()()').should.be.true;
    balanced('(([{}]{}))').should.be.true;
    balanced('[(([{}]{[]}))]').should.be.true;
  });

  it('should return false if string is not balanced', function() {
    balanced('(').should.be.false;
    balanced('())').should.be.false;
    balanced('(([{}]{))').should.be.false;
    balanced(')(').should.be.false;
    balanced('[(([{}]{][]}))]').should.be.false;
  });
});
