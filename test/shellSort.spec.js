'use strict';

var algolib = require('../index.js');

describe('shellSort', function() {
    it('should return sorted array if sorted array was passed', function() {
        var sortedArr = algolib.shellSort([1, 3, 4, 6, 7, 9]);
        sortedArr.should.be.eql([1, 3, 4, 6, 7, 9]);
    });
    it('should sort array', function() {
        var sortedArr = algolib.shellSort([2, 3, 6, 1, 3, 4, 7, 5]);
        sortedArr.should.be.eql([1, 2, 3, 3, 4, 5, 6, 7]);
    })
});