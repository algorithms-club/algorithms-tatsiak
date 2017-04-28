'use strict';

const LinkedList = require('../app/linkedList');


class Stack {
    constructor() {
        this._list = new LinkedList;
    }
    push(value) {
        this._list.pushIntoEnd(value);
    }
    pop() {
        return this._list.pop();
    }
}

module.exports = Stack;