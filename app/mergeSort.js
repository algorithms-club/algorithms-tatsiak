'use strict'

module.exports = function mergeSort (collection, comparator) {
    if (!collection.length || collection.length === 1) {
        return collection;
    }
    else {
        let middleIndex = Math.floor(collection.length / 2);
        let leftHalf = collection.slice(0, middleIndex);
        let rightHalf = collection.slice(middleIndex);
        mergeSort(leftHalf, comparator);
        mergeSort(rightHalf, comparator);
        merge(leftHalf, rightHalf, collection, comparator);
        return collection;
    }
};


function merge(leftHalf, rightHalf, collection, comparator) {
    let index = 0;
    while (leftHalf.length && rightHalf.length) {
        collection[index++] = (comparator(leftHalf[0], rightHalf[0])) ? rightHalf.shift() : leftHalf.shift();
    }
    while (rightHalf.length) {
        collection[index++] = rightHalf.shift();

    }
    while (leftHalf.length) {
        collection[index++] = leftHalf.shift();
    }
}
