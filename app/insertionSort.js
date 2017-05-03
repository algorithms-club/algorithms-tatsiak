'use strict'
var Comparator = require('./comparator.js');

module.exports = function (collection) {
    if(!collection.length){
        return;
    }
    let positionToInsert, valueToInsert;
    for (let i = 1; i < collection.length; i++) {
        valueToInsert = collection[i];
        positionToInsert = i;
        while (positionToInsert > 0 && Comparator(collection[positionToInsert-1], valueToInsert)) {
            collection[positionToInsert] = collection[positionToInsert - 1];
            positionToInsert --;
        }
        if(positionToInsert!==i) {
            collection[positionToInsert] = valueToInsert;
        }
    }
    return collection;
};