'use strict';

let bubbleSort = require('./app/bubble-sort');
let coverByTile = require('./app/coverBytTile');
let divideWatermelon = require('./app/divideWatermelon');
let beautifulYear = require('./app/beautifulYear');
let UnionFind = require('./app/unionFind');
let insertionSort = require('./app/insertionSort');
let shellSort = require('./app/shellSort');
let mergeSort = require('./app/mergeSort');
let quickSortLomuto = require('./app/quickSortLomutoPartitionScheme');
let quickSortHoare = require('./app/quickSortHoarePartitionScheme');
let isSorted = require('./app/isSorted');
let shuffle = require('./app/shuffle');
let swap = require('./app/swap');
let LinkedList = require('./app/linkedList');
let QuickUnionWeighted = require('./app/quickUnionWeighted');

let algolib = {
    bubbleSort,
    coverByTile,
    divideWatermelon,
    beautifulYear,
    UnionFind,
    insertionSort,
    shellSort,
    mergeSort,
    quickSortLomuto,
    quickSortHoare,
    isSorted,
    shuffle,
    swap,
    LinkedList,
    QuickUnionWeighted,
};


module.exports = algolib;