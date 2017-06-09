'use strict'
const algolib = require('../index.js');

describe.only('#Binnary Search Tree', function () {
    describe('#add', function () {
        it('add first element as root', function () {
            let BST = new algolib.BST();
            BST.add(3);
            BST.add(4);
            BST.add(5);
            BST.add(6);
            BST.add(1);
            BST.root.value.should.be.eql(3)
        })
    });
});
