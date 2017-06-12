'use strict'
const algolib = require('../index.js');

describe.only('#Binnary Search Tree', function () {
    describe('#add', function () {
        // it('add first element as root', function () {
        //     let BST = new algolib.BST();
        //     BST.add(10);
        //     BST.add(2);
        //     BST.add(32);
        //     BST.add(30);
        //     console.log(BST)
        //     console.log(BST.root.right)
        //
        //     BST.root.value.should.be.eql(3)
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
            console.log(maxElement);
            maxElement.should.be.eql(6)
        })
    });
});
