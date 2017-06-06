'use strict';

let algolib = require('../index.js');
let comparator = require('../app/comparator').compareNumbers;
let testArrays = require('../test/testArrays');
let sort = algolib.shellSort;


describe('shellSort', function() {
    it('should return sorted array if sorted array was passed', function() {
        var sortedArr = sort(testArrays.sortedArray, comparator);
        algolib.isSorted(sortedArr, comparator).should.be.true();
    });
    it('should return sorted array if back-sorted array was passed', function() {
        var sortedArr = sort(testArrays.backSortedArray, comparator);
        algolib.isSorted(sortedArr, comparator).should.be.true();
    });
    it('should return sorted array if almost sorted array was passed', function() {
        var sortedArr = sort(testArrays.almostSortedArray, comparator);
        algolib.isSorted(sortedArr, comparator).should.be.true();
    });
    it('should sort shuffled array', function() {
        var sortedArr = sort(testArrays.shuffledArray, comparator);
        algolib.isSorted(sortedArr, comparator).should.be.true();
    })
    it('should sort shuffled array with duplicates', function() {
        var sortedArr = sort(testArrays.duplicatesArray, comparator);
        algolib.isSorted(sortedArr, comparator).should.be.true();
    })
    it('should return array with 100 elements', function() {
        var sortedArr = sort(testArrays.hundredArray, comparator);
        sortedArr.length.should.be.eql(100);
    })
    it('should return array with no elements', function() {
        var sortedArr = sort([], comparator);
        sortedArr.length.should.be.eql(0);
    })
});
