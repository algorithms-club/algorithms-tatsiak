'use strict'

module.exports = function (collection, a, b) {
        let temp = collection[a];
        collection[a] = collection[b];
        collection[b] = temp;
};
