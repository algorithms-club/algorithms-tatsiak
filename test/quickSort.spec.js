'use strict';

let algolib = require('../index.js');
let comparator = require('../app/comparator').compareNumbers;
let sort = algolib.quickSortHoare;
let testArrays = require('../test/testArrays');


describe('quickSort', function() {
    it('should return sorted array if sorted array was passed', function() {
        console.time("time for sorting with sortedArray");
        var sortedArr = sort(testArrays.sortedArray, comparator);
        algolib.isSorted(sortedArr, comparator).should.be.true();
        console.timeEnd("time for sorting with sortedArray");
    });
    it('should sort shuffled array', function() {
        console.time("time for sorting with shuffledArray");
        var sortedArr = sort(testArrays.shuffledArray, comparator);
        algolib.isSorted(sortedArr, comparator).should.be.true();
        console.timeEnd("time for sorting with shuffledArray");
    })
});


