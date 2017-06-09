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
        console.log('vars')

        if (root === null) {
            console.log('root = nan')
            this.root = tempNode;
            return;
        } else {
            console.log('else')
            currentNode = this.root;
            parrentNode = null;
            while (true) {
                // console.log('while')
                parrentNode = currentNode;
                if (value < parrentNode.value) {
                    console.log('left')
                    currentNode = currentNode.left;
                    if (currentNode === null) {
                        parrentNode.left = tempNode
                        return
                    }
                } else {
                    console.log('right')
                    currentNode = currentNode.right;


                    if (currentNode === null) {
                        parrentNode.right = tempNode;
                        return
                    }
                }
            }
        }

    }
    find(value){

    }
}

module.exports = BST;