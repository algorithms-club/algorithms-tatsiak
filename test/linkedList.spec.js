'use strict'
const algolib = require('../index.js');

describe('#linkedList', function () {
    describe('#pushIntoEnd', function () {
        it('should push element it the end of the list ', function () {
            let linkedList = new algolib.LinkedList();
            linkedList.pushIntoEnd(3);
            linkedList.pushIntoEnd(7);
            linkedList.pop().should.be.eql(7);
            linkedList.pop().should.be.eql(3);
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
        it('should return undefined if list is empty', function () {
            let linkedList = new algolib.LinkedList();
            let emptyPop = linkedList.pop();
            (emptyPop === undefined).should.be.true();
        });
        it('should return last element', function () {
            let linkedList = new algolib.LinkedList();
            linkedList.pushIntoStart(1);
            linkedList.pushIntoEnd(2);
            linkedList.pushIntoStart(3);
            linkedList.pushIntoEnd(4);
            linkedList.pop().should.be.eql(4);
            linkedList.pop().should.be.eql(2);
            linkedList.pop().should.be.eql(1);
            linkedList.pop().should.be.eql(3);
        });

        it('should not left any data in list after last pop', function () {
            let linkedList = new algolib.LinkedList();
            linkedList.pushIntoStart(1);
            linkedList.pushIntoEnd(2);
            linkedList.pushIntoStart(3);
            linkedList.pushIntoEnd(4);
            linkedList.pop().should.be.eql(4);
            linkedList.pop().should.be.eql(2);
            linkedList.pop().should.be.eql(1);
            linkedList.pop().should.be.eql(3);
            var lastPop = linkedList.pop();
            (lastPop === undefined).should.be.true();
        });
    })
});
