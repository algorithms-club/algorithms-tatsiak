'use strict'
const algolib = require('../index.js');

describe.only('#Binnary Search Tree', function () {
    describe('#add', function () {
        // it('add first element as root', function () {
        //     let BT = new algolib.BT();
        //     BT.add(10);
        //     BT.add(2);
        //     BT.add(32);
        //     BT.add(30);
        //     console.log(BT)
        //     console.log(BT.root.right)
        //
        //     BT.root.value.should.be.eql(3)
        // })
    });
    describe('#findMax', function () {
        it('should return max element in tree', function () {
            let BST = new algolib.BST();
            BST.add(50);
            BST.add(4);
            BST.add(422);
            BST.add(5);
            BST.add(9);
            BST.add(12);
            let maxElement = BST.findMax(BST.root);
            maxElement.should.be.eql(422)
        })
    });
    describe('#findMin', function () {
        it('should return in element in tree', function () {
            let BST = new algolib.BST();
            BST.add(50);
            BST.add(4);
            BST.add(422);
            BST.add(5);
            BST.add(9);
            BST.add(12);
            let minElement = BST.findMin(BST.root);
            minElement.should.be.eql(4)
        })
    });
    describe('#findNode', function () {
        it('should search node with given value and return it', function () {
            let BST = new algolib.BST();
            BST.add(50);
            BST.add(4);
            BST.add(422);
            BST.add(5);
            BST.add(9);
            BST.add(12);
            let node = BST.findNode(4, BST.root);
            node.value.should.be.eql(4)
            let node1 = BST.findNode(5, BST.root);
            node1.value.should.be.eql(5)
        })
    });
});
