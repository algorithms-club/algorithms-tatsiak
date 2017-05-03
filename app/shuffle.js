'use strict';
module.exports = function (collection) {
    if(!collection.length){
        return;
    }
    let element, randomValue;
    for (let i = 0; i < collection.length-1; i++) {
        element = collection[i];
        randomValue = Math.floor(Math.random() * i);
        collection[i] = collection[randomValue];
        collection[randomValue] = element;
    }
    return collection;
};
