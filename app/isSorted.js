'use strict';
var Comparator = require('./comparator.js');

module.exports = function (collection) {
    if(!collection.length){
        return;
    }
    for (let i = 0; i < collection.length; i++) {
        if(Comparator(collection[i], collection[i+1])){
            console.log('true');
            console.log(collection[i]);
            console.log(collection[i+1]);
            return false;
        }
    }
    console.log('else');
    return true;
};