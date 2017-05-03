'use strict';

const algolib = require('../index.js');

describe('isSorted', function() {
    it('should return true if sorted array was passed', function() {
        let isSorted = algolib.isSorted([1, 3, 4, 6, 7, 9]);
        isSorted.should.be.true();
    });
    it('should return false if unsorted array was passed', function() {
        let isSorted = algolib.isSorted([1, 3, 4, 6, 9, 7]);
        isSorted.should.be.false();
    });
});