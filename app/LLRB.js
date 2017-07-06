'use strict';

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
        this.isRed = true;
    }
}
class Llrb {
    constructor(elements) {
        this.root = null;
        if (elements && elements.length) {
            this._buildFromArray(elements);
        }
    }

    _buildFromArray(elements) {}

    _findPlace(node, key){
        if (node.key > key){
            if (node.left === null){
                return node
            }
            this._findPlace(node.left, key)
        } else if (node.key < key){
            if (node.right === null){
                return node
            }
            this._findPlace(node.right, key)
        }

    }

    _rotateLeft(node){
        let x = node.right;
        node.right = x.left;
        x.left = node;
        x.isRed = x.left.isRed;
        x.left.isRed = true;
        return x;
    }
    _rotateRight(node){
        let x = node.left;
        node.left = x.right;
        x.right = node;
        x.isRed = x.right.isRed;
        x.right.isRed = true;
        return x;
    }
    _flipColor(node){
        node.isRed       = !node.isRed;
        node.left.isRed  = !node.left.isRed;
        node.right.isRed = !node.right.isRed;
        return node;
    }


    insert(key, value) {
        if (!this.root) {
            return this.root = new Node(key, value)
        }

        // if left and right = red -> this.flipColor()
        if ()

        let parent = this._findPlace(this.root, key);
        if (parent.key < key){
            parent.right = new Node(key, value)
        } else if (parent.key > key){
            parent.left = new Node(key, value)
        } else {
            parent.value = value;
        }
        //balance tree
        if (parent.right.isRed === true){
            parent = this._rotateLeft(parent)
        }

        // if node.right  = red -> this._rotateLeft()
        // if left and right = red -> this.flipColor()
        // node.left = red and node.left.left = red -> this._rotateRight()
    }

    find() {
    }

    sortDesc(){}
    sortAsc(){}

    getMax(root) {
        return (root.right === null) ? root.value : this.findMax(root.right)

    }

    getMin(root) {
    }

    size() {
    }
}

module.exports = Llrb;