'use strict'
const should = require('should')
const algolib = require('../index.js');

//llrb === Left Lint Red Black Tree

describe.only('#Llrb', function () {
    it('should Llrb create proper instance of tree ', function () {
        const tree = new algolib.LLRB();
        tree.insert.should.be.instanceOf(Function);
        tree.find.should.be.instanceOf(Function);
        tree.getMin.should.be.instanceOf(Function);
        tree.getMax.should.be.instanceOf(Function);
        tree.size.should.be.instanceOf(Function);
    });
    it('Llrb insert element', function () {
        const tree = new algolib.LLRB();
        tree.root = tree.insert(tree.root, 4,'algorithms');
        tree.root = tree.insert(tree.root, 8,'new value');
        console.log(tree)
        tree.root.right.key.should.be.eql(8);
        tree.root.right.value.should.be.eql('new value');
        should(tree.root).be.ok();
    });
});
