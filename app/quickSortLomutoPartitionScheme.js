'use strict'
let swap = require('./swap');
let shuffle = require('./shuffle');
module.exports = function (collection, comparator) {
    if (!collection.length <= 1) {
        return collection;
    }
    function quickSort(collection, start, end){
        if(start < end){
            let partitionElement = partition(collection, start, end);
            quickSort(collection, start, partitionElement - 1);
            quickSort(collection, partitionElement + 1, end);
        }
        return collection;
    }
    function partition(collection, start, end){
        let partitionElement = start;
        let elementToCompare = end;
        for(let i = partitionElement; i < elementToCompare; i++){
            if(comparator(collection[elementToCompare], collection[i])){
                swap(collection, i, partitionElement);
                partitionElement++;
            }
        }
        swap(collection, elementToCompare, partitionElement);
        return partitionElement;
    }
    collection = shuffle(collection);
    return quickSort(collection, 0, collection.length-1);
};