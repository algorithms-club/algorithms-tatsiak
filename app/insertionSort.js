'use strict'

module.exports = function (collection, comparator) {
    if(!collection.length){
        return;
    }
    let positionToInsert, valueToInsert;
    for (let i = 1; i < collection.length; i++) {
        valueToInsert = collection[i];
        positionToInsert = i;
        while (positionToInsert > 0 && comparator(collection[positionToInsert-1], valueToInsert)) {
            collection[positionToInsert] = collection[positionToInsert - 1];
            positionToInsert --;
        }
        if(positionToInsert!==i) {
            collection[positionToInsert] = valueToInsert;
        }
    }
    return collection;
};