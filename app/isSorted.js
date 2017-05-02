'use strict'
module.exports = function (collection, comparator) {
    if(!collection.length){
        return;
    }
    for (let i = 0; i < collection.length; i++) {   
        if(!comparator(collection[i], collection[i+1])){
            return false;
        }
        else return true;
    }
};