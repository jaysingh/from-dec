Node.js merge sorted array
A utility library to convert decimal number to any base

Installation

npm install from-dec --save

Usage

var FromDecimal = require('from-dec'), 
    c = FromDecimal.convert;

console.log(c(100, 16));
  Output: 64

console.log(c(-100, 16));
  Output: -64

console.log(c(5, 2));
  Output: 101

Tests

npm test

Contributing

Kindly file any bugs and contribute to this repository by sending pull requests.

Release History

0.1.0 Initial release
