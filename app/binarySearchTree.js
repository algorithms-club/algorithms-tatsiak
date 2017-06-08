/**
 * Created by tatsiak on 4/22/17.
 */
'use strict';

class Node {
    constructor(left, key, value, right, parent) {
        this._left = left;
        this._right = right;
        this._parent = parent;
        this._key = key;
        this._value = value
    }
}


class BST {
    addNode(node);
    findNode(node);
}

module.exports = BST;