'use strict';

const LinkedList = require('../app/linkedList');


class Queue {
    constructor() {
        this._list = new LinkedList;
    }
    push(value) {
        this._list.pushIntoStart(value);
    }
    pop() {
        return this._list.pop();
    }
}

module.exports = Queue;