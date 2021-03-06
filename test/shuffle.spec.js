'use strict';

const algolib = require('../index.js');
const comparator = require('../app/comparator').compareNumbers;



describe('shuffle', function() {
    it('should return mixed array if sorted array was passed', function() {
        let mixedArray = algolib.shuffle([1, 3, 4, 6, 7, 9]);
        let isSorted = algolib.isSorted(mixedArray, comparator);
        isSorted.should.be.false();
    });
    it('should not loose any element while shuffling', function() {
        let array = [1, 3, 4, 6, 7, 9];
        let mixedArray = algolib.shuffle(array);
        let isSorted = algolib.isSorted(mixedArray, comparator);
        isSorted.should.be.false();
        let sorted = algolib.insertionSort(mixedArray, comparator)
        sorted.should.be.eql(array)
    });
});