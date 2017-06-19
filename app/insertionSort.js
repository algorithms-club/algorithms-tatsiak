'use strict'

module.exports = function (collection, comparator) {
    if (!collection.length <= 1) {
        return collection;
    }
    let positionToInsert, valueToInsert, amountOfCompares = 0, amountOfSwaps = 0;
    for (let i = 1; i < collection.length; i++) {
        valueToInsert = collection[i];
        positionToInsert = i;
        while (positionToInsert > 0 && comparator(collection[positionToInsert-1], valueToInsert)) {
            collection[positionToInsert] = collection[positionToInsert - 1];
            positionToInsert --;
        }
        amountOfCompares++;
        if(positionToInsert!==i) {
            collection[positionToInsert] = valueToInsert;
        }
    }
    return collection;
};
