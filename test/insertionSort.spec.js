'use strict';

var algolib = require('../index.js');

describe('insertionSort', function() {
    it('should return sorted array if sorted array was passed', function() {
        var sortedArr = algolib.insertionSort([1, 3, 4, 6, 7, 9]);
        sortedArr.should.be.eql([1, 3, 4, 6, 7, 9]);
    });
    it('should sort array', function() {
        var sortedArr = algolib.insertionSort([2, 3, 6, 1, 3, 4, 7, 5]);
        sortedArr.should.be.eql([1, 2, 3, 3, 4, 5, 6, 7]);
    })
});