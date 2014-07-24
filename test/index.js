var should = require('chai').should(),
    FromDecimal = require('../index'),
    c = FromDecimal.convert;

describe('#testingConvert', function() {
  it('converts 5 to 101 in binary;', function() {
    c(5, 2).should.equal('101');
  });

  it('converts -5 to -101 in binary;', function() {
    c(-5, 2).should.equal('-101');
  });

  it('converts 100 to 64 in hexadecimal;', function() {
    c(100, 16).should.equal('64');
  });

  it('converts -100 to -64 in hexadecimal;', function() {
    c(-100, 16).should.equal('-64');
  });
});