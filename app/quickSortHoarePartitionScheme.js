'use strict'
let swap = require('./swap');
let shuffle = require('./shuffle');
module.exports = function (collection, comparator) {
    function quickSort(collection, start, end) {
        if (start < end) {
            let partitionElement = partition(collection, start, end);
            quickSort(collection, start, partitionElement);
            quickSort(collection, partitionElement + 1, end);
        }
        return collection;
    }
    function partition(collection, start, end) {
        let pivotElement = start;
        let i = start - 1;
        let j = end + 1;
        do {
            do {
                i++;
            } while (comparator(collection[pivotElement], collection[i]));

            do {
                j--;
            } while (comparator(collection[j], collection[pivotElement]));

            if (i >= j) {
                return j;
            }
            swap(collection, i, j);

        } while (true)
    }
    // collection = shuffle(collection);
    collection = quickSort(collection, 0, collection.length - 1);
    return collection
};