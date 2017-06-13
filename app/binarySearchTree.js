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

    findNode(value) {
    }

    findMax(root) {
        return (root.right === null) ? root.value : this.findMax(root.right)
    }

    findMin() {
    }
}

module.exports = BST;