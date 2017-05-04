'use strict';

let bubbleSort = require('./app/bubble-sort');
let coverByTile = require('./app/coverBytTile');
let divideWatermelon = require('./app/divideWatermelon');
let beautifulYear = require('./app/beautifulYear');
let UnionFind = require('./app/unionFind');
let QuickUnionWeighted = require('./app/quickUnionWeighted');

let algolib = {
    bubbleSort,
    coverByTile,
    divideWatermelon,
    beautifulYear,
    UnionFind,
    QuickUnionWeighted,
};

module.exports = algolib;