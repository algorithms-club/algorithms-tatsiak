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
            linkedList.pushIntoStart(1);
            linkedList.pushIntoStart(2);
            linkedList.pushIntoStart(4);
            linkedList.pop().should.be.eql(1);
            linkedList.pop().should.be.eql(2);
            linkedList.pop().should.be.eql(4);

        })
    });
    describe('#pop', function () {
        it('should return last element', function () {
            let linkedList = new algolib.LinkedList();
            linkedList.pushIntoEnd(1);
            linkedList.pushIntoEnd(3);
            linkedList.pushIntoEnd(4);
            linkedList.pushIntoEnd(13);
            linkedList.pushIntoEnd(8);
            linkedList.pushIntoEnd(2);
            linkedList.pop().should.be.eql(2);
            linkedList.pop().should.be.eql(8);
            linkedList.pop().should.be.eql(13);
            linkedList.pop().should.be.eql(4);
            linkedList.pop().should.be.eql(3);
            linkedList.pop().should.be.eql(1);
        })
    })
});

