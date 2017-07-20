'use strict'
let swap = require('./swap');
let shuffle = require('./shuffle');
module.exports = function (collection, comparator) {
    let length;

    function buildHeap(collection) {
        length = collection.length;
        for (let i = Math.floor(length / 2); i >= 0; i--) {
            heapify(collection, i);
        }
    }

    function heapify(collection, i) {
        let left = getLeft(i);
        let right = getRight(i);
        let largest = i;

        if (left < length && comparator(collection[left], collection[largest])) {
            largest = left;
        }

        if (right < length && comparator(collection[right], collection[largest])) {
            largest = right;
        }

        if (largest != i) {
            swap(collection, i, largest);
            heapify(collection, largest);
        }
    }

    function getLeft(i) {
        return 2 * i + 1;
    }

    function getRight(i) {
        return 2 * i + 2;
    }

    function heapSort(collection) {
        buildHeap(collection);
        for (let i = collection.length - 1; i > 0; i--) {
            swap(collection, 0, i);
            length--;
            heapify(collection, 0);
        }
        return collection;
    }
    return heapSort(collection)
};