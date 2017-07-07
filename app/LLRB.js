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

    _buildFromArray(elements) {
    }


    _rotateLeft(node) {
        let x = node.right;
        node.right = x.left;
        x.left = node;
        x.isRed = x.left.isRed;
        x.left.isRed = true;
        return x;
    }

    _rotateRight(node) {
        let x = node.left;
        node.left = x.right;
        x.right = node;
        x.isRed = x.right.isRed;
        x.right.isRed = true;
        return x;
    }

    _flipColor(node) {
        node.isRed = !node.isRed;
        node.left.isRed = !node.left.isRed;
        node.right.isRed = !node.right.isRed;
        return node;
    }


    insert(node, key, value) {
        if (node === null) return new Node(key, value);

        if (key === node.key) {
            node.value = value;
            return node;
        }
        else if (key < node.key) node.left = this.insert(node.left, key, value);
        else node.right = this.insert(node.right, key, value);

        //balance tree
        if (node.right !== null && node.left !== null) {
            if (node.right.isRed) node = this._rotateLeft(node);
            if (node.left.isRed && node.left.left.isRed) node = this._rotateRight(node);
            if (node.left.isRed && node.right.isRed) this._flipColor(node);
        }

        return node;
    }

    find() {
    }

    sortDesc() {
    }

    sortAsc() {
    }

    getMax(root) {
        return (root.right === null) ? root.value : this.getMax(root.right)
    }

    getMin(root) {
    }

    size() {
    }
}

module.exports = Llrb;