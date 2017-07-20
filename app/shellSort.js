'use strict'

module.exports = function (collection, comparator) {
    if (!collection.length <= 1) {
        return collection;
    }
    var interval = collection.length;
    var valueToInsert;
    var outer;
    var inner;
    while (interval > 0) {
        for (outer = interval; outer < collection.length; outer++) {
            valueToInsert = collection[outer];
            for (inner = outer; inner >= interval && !comparator(valueToInsert, collection[inner - interval]); inner -= interval) {
                collection[inner] = collection[inner - interval];
            }
            collection[inner] = valueToInsert;
        }
        interval = interval % 2 === 0 ? interval / 2 : (interval - 1) / 2;
    }
    return collection;
};
