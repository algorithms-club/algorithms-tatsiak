'use strict'
var Comparator = require('./comparator.js');

module.exports = function (collection) {
    if (!collection.length) {
        return;
    }
    var interval = collection.length, valueToInsert, outer, inner;
    while (interval > 0) {
        for (outer = interval; outer < collection.length; outer++) {
            valueToInsert = collection[outer];
            for (inner = outer; inner >= interval && !Comparator(valueToInsert, collection[inner - interval]); inner -= interval)
                collection[inner] = collection[inner - interval];
            collection[inner] = valueToInsert;
        }
        interval = interval % 2 === 0 ? interval / 2 : (interval - 1) / 2;
    }
    return collection;
};
