/**
 * Created by tatsiak on 4/22/17.
 */
'use strict';

class Node {
    constructor(value, previous = null) {
        this._value = value;
        this._previous = previous;
        this._next = null;
    }
}
class LinkedList {
    constructor() {
        this._start = null;
        this._end = null;
    }
    pushIntoEnd(value) {
        if (this._start === null) {
            this._start = new Node(value);
            this._end = this._start;
        } else {
            this._end._next = new Node(value, this._end);
            this._end = this._end._next;
        }
    }
    pushIntoStart(value) {
        if (this._start === null) {
            this._start = new Node(value);
            this._end = this._start;
        } else {
            this._start._previous = new Node(value);
            this._start._next = this._start;
            this._start = this._start._previous;
        }
    }
    pop() {
        if (this._start === null) {
            return;
        }
        let last = this._end._value;
        if (!this._end._previous) {
            this._start = null;
            this._end = this._start;
            return last;
        }
        this._end._previous._next = null;
        this._end = this._end._previous;
        return last;
    }
}

module.exports = LinkedList;