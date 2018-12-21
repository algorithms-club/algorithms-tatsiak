'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor() {
        this.root = null;
    }

    add(value) {
        let tempNode = new Node(value);
        let currentNode;
        let parrentNode;
        let root = this.root;

        if (root === null) {
            this.root = tempNode;
            return;
        } else {
            currentNode = this.root;
            while (true) {
                parrentNode = currentNode;
                if (value < parrentNode.value) {
                    currentNode = currentNode.left;
                    if (currentNode === null) {
                        parrentNode.left = tempNode;
                        return
                    }
                } else {
                    currentNode = currentNode.right;
                    if (currentNode === null) {
                        parrentNode.right = tempNode;
                        return
                    }
                }
            }
        }

    }

    findNode(value, root) {
        if (root !== null) {
            if (root.value === value) {
                return root;
            } else {
                var result = this.findNode(value, root.left);
                if (result === null) {
                    result = this.findNode(value, root.right);
                }
                return result;
            }
        } else {
            return null;
        }
    }

    findMax(root) {
        return (root.right === null) ? root.value : this.findMax(root.right)
    }

    findMin(root) {
        return (root.left === null) ? root.value : this.findMin(root.left)
    }
}

module.exports = BST;