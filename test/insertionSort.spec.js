'use strict';

var algolib = require('../index.js');
var сomparator = require('../app/comparator').compareNumbers;



describe('insertionSort', function() {
    it('should return sorted array if sorted array was passed', function() {
        var sortedArr = algolib.insertionSort([1, 3, 4, 6, 7, 9], сomparator);
        algolib.isSorted(sortedArr, сomparator).should.be.true();
    });
    it('should sort array', function() {
        var sortedArr = algolib.insertionSort(algolib.shuffle([2, 3, 6, 1, 3, 4, 7, 5]), сomparator);
        algolib.isSorted(sortedArr, сomparator).should.be.true();
    });
});