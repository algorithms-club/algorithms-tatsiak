'use strict'
const algolib = require('../index.js');

describe('#stack', function () {
    describe('#pop', function () {
        it('should return last element in the stack', function () {
            let stack = new algolib.Stack();
            stack.push(3);
            stack.push(9);
            stack.pop().should.be.eql(9);
        })
    });
    describe('#push', function () {
        it('should push element it the end of the stack', function () {
            let stack = new algolib.Stack();
            stack.push(3);
            stack.push(9);
            stack.push(7);
            stack.pop().should.be.eql(7);
        })
    });
});

