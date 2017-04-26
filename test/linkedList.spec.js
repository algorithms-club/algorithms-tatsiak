'use strict'
const algolib = require('../index.js');

describe('#linkedList', function () {
    describe('#pushIntoEnd', function () {
        it('should push element it the end of the list ', function () {
            let linkedList = new algolib.LinkedList();
            linkedList.pushIntoEnd(3);
            linkedList.pushIntoEnd(7);
            linkedList.pop().should.be.eql(7);
        })
    });
    describe('#pushIntoStart', function () {
        it('should push element in the start if the list', function () {
            let linkedList = new algolib.LinkedList();
            linkedList.pushIntoEnd(3);
            linkedList.pushIntoEnd(7);
            linkedList.pushIntoStart(1);
            linkedList.pop();
            linkedList.pop();
            linkedList.pop().should.be.eql(1);
        })
    });
    describe('#pop', function () {
        it('should return last element', function () {
            let linkedList = new algolib.LinkedList();
            linkedList.pushIntoEnd(1);
            linkedList.pushIntoEnd(2);
            linkedList.pop().should.be.eql(2);
        })
    })
});

