'use strict'
const algolib = require('../index.js');

describe('#queue', function () {
    describe('#pop', function () {
        it('should return first element in the queue', function () {
            let queue = new algolib.Queue();
            queue.push(3);
            queue.push(9);
            queue.push(7);
            queue.pop().should.be.eql(3);
        })
    });
    describe('#push', function () {
        it('should push element it the end of the queue', function () {
            let queue = new algolib.Queue();
            queue.push(3);
            queue.push(9);
            queue.push(10);
            queue.push(7);
            queue.pop();
            queue.pop();
            queue.pop();
            queue.pop().should.be.eql(7);
        })
    });
});

