'use strict';

const algolib = require('../index.js');
const comparator = function (a, b) {
    return a > b;
};

describe('insertionSort', function() {
    it('should return sorted array if sorted array was passed', function() {
        let sortedArr = algolib.insertionSort([1, 3, 4, 6, 7, 9], comparator());
        sortedArr.should.be.eql([1, 3, 4, 6, 7, 9]);
    });
    it('should sort array', function() {
        let sortedArr = algolib.insertionSort([2, 3, 6, 1, 3, 4, 7, 5], comparator());
        sortedArr.should.be.eql([1, 2, 3, 3, 4, 5, 6, 7]);
    })
});