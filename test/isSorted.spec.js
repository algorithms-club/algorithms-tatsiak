'use strict';

var algolib = require('../index.js');
var comparator = require('../app/comparator').compareNumbers;

describe('isSorted', function() {
    it('should return true if sorted array was passed', function() {
        let isSorted = algolib.isSorted([1, 3, 4, 6, 7, 9], comparator);
        isSorted.should.be.true();
    });
    it('should return false if unsorted array was passed', function() {
        let isSorted = algolib.isSorted([1, 3, 4, 6, 9, 7], comparator);
        isSorted.should.be.false();
    });
});