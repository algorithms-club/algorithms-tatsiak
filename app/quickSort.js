'use strict'
let swap = require('./swap');
let shuffle = require('./shuffle');
let swaps = 0, compares = 0;
module.exports = function (collection, comparator) {
    function quickSort(collection, start, end){
        if(start < end){
            let index = partition(collection, start, end);
            quickSort(collection, start, index - 1);
            quickSort(collection, index + 1, end);
        }
        return collection;
    }
    function partition(collection, start, end){
        let index = start;
        let elementToCompare = end;
        for(let i = index; i < elementToCompare; i++){
            compares++;
            if(comparator(collection[elementToCompare], collection[i])){
                swap(collection, i, index);
                swaps++;
                index++;
            }
        }
        swap(collection, elementToCompare, index);
        swaps++;
        return index;
    }
    console.log('algorithm used comparator '+ compares + ' times and swapped elements '+ swaps + ' times.');
    // collection = shuffle(collection);
    return quickSort(collection, 0, collection.length-1);
};