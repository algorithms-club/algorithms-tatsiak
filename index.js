'use strict';

let bubbleSort = require('./app/bubble-sort');
let coverByTile = require('./app/coverBytTile');
let divideWatermelon = require('./app/divideWatermelon');
let beautifulYear = require('./app/beautifulYear');
let UnionFind = require('./app/unionFind');
let LinkedList = require('./app/linkedList');
let Stack = require('./app/stack');
let Queue = require('./app/queue');
let insertionSort = require('./app/insertionSort');
let shellSort = require('./app/shellSort');
let mergeSort = require('./app/mergeSort');
let quickSortLomuto = require('./app/quickSortLomutoPartitionScheme');
let quickSortHoare = require('./app/quickSortHoarePartitionScheme');
let heapSort = require('./app/heapSort');
let isSorted = require('./app/isSorted');
let shuffle = require('./app/shuffle');
let swap = require('./app/swap');
let QuickUnionWeighted = require('./app/quickUnionWeighted');

let algolib = {
    bubbleSort,
    coverByTile,
    divideWatermelon,
    beautifulYear,
    UnionFind,
    LinkedList,
    Stack,
    Queue,
    insertionSort,
    shellSort,
    mergeSort,
    quickSortLomuto,
    quickSortHoare,
    heapSort,
    isSorted,
    shuffle,
    swap,
    QuickUnionWeighted,
};


module.exports = algolib;