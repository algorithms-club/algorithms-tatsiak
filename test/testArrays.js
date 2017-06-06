'use strict'

let hundredArray = [],
    tenThousandArray = [],
    billionArray = [],
    sortedArray = [1,2,3,4,5,6,7,8,9,10],
    backSortedArray = [10,9,8,7,6,5,4,3,2,1],
    almostSortedArray = [1,3,2,4,5,7,6,8,9,10],
    shuffledArray = [2,4,9,1,3,5,10,6,8,7],
    duplicatesArray = [2,2,4,4,4,9,1,3,5,10,6,8,7];
for (var i = 0; i<100; i++){
    hundredArray.push(Math.round(Math.random() * 100))
}
for (var i = 0; i<10000; i++){
    tenThousandArray.push(Math.round(Math.random() * 10000))
}
// for (var i = 0; i<1000000000; i++){
//     billionArray.push(Math.round(Math.random() * 1000000000))
// }
const arrays = {
    hundredArray, tenThousandArray, billionArray, sortedArray, backSortedArray, almostSortedArray, shuffledArray, duplicatesArray
};

module.exports = arrays;