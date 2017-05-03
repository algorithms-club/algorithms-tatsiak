'use strict';

const algolib = require('../index.js');

describe('shuffle', function() {
    it('should return mixed array if sorted array was passed', function() {
        let mixedArray = algolib.shuffle([1, 3, 4, 6, 7, 9]);
        let isSorted = algolib.isSorted(mixedArray);
        isSorted.should.be.false();
    });
});