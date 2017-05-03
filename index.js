'use strict';

let bubbleSort = require('./app/bubble-sort');
let coverByTile = require('./app/coverBytTile');
let divideWatermelon = require('./app/divideWatermelon');
let beautifulYear = require('./app/beautifulYear');
let UnionFind = require('./app/unionFind');
let insertionSort = require('./app/insertionSort');
let shellSort = require('./app/shellSort');
let isSorted = require('./app/isSorted');
let shuffle = require('./app/shuffle');

let algolib = {
    bubbleSort,
    coverByTile,
    divideWatermelon,
    beautifulYear,
    UnionFind,
    insertionSort,
    shellSort,
    isSorted,
    shuffle,
}

module.exports = algolib;