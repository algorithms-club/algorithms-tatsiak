'use strict';

let algolib = require('../index.js');
let comparator = require('../app/comparator').compareNumbers;

let testArray = [];
while(testArray.length<160){
    testArray.push(Math.round(Math.random() * 999));
}

describe('mergeSort', function() {
    it('should return sorted array if sorted array was passed', function() {
        var sortedArr = algolib.mergeSort(testArray, comparator);
        algolib.isSorted(sortedArr, comparator).should.be.true();
    });
    it('should sort array', function() {
        var sortedArr = algolib.mergeSort(algolib.shuffle(testArray), comparator);
        console.log(sortedArr);
        algolib.isSorted(sortedArr, comparator).should.be.true();
    })
});

