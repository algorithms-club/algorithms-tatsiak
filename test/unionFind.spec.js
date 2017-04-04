/**
 * Created by tatsiak on 4/1/17.
 */
 'use strict'
 const algolib = require('../index.js');
 
 
 describe.only('#unionFind', function () {

     // isConnected
     it('should create proper data structure', function () {
       let uf = new algolib.UnionFind();
       uf.connect.should.be.instanceOf(Function);
       uf.isConnected.should.be.instanceOf(Function);
   })

     it('should return false if elements are not connected', function () {         
        let uf = new algolib.UnionFind();
        let isElementsConnected = uf.isConnected(7, 3333);
        isElementsConnected.should.be.false();
    }) 
     // connect
     it('should return true if elements are connected', function () {
       let uf = new algolib.UnionFind();
       uf.connect(1, 5);
       let isElementsConnected = uf.isConnected(1, 5);
       isElementsConnected.should.be.true();
   })

     it('should return true if elements are connected', function () {
       let uf = new algolib.UnionFind();
       uf.connect(1, 5);
       uf.connect(5, 10);
       let isElementsConnected = uf.isConnected(1, 10);
       isElementsConnected.should.be.true();
   })

     // count
     it('should return true if number of components is 1', function () {
       let uf = new algolib.UnionFind();
       uf.connect(3, 6);
       let numberOfComponents = uf.count();
       numberOfComponents.should.be.eql(1);
   })

     it('should return true if number of components is 2', function () {
        let uf = new algolib.UnionFind();
        uf.connect(1, 3);
        uf.connect(7, 13);
        let numberOfComponents = uf.count();
        numberOfComponents.should.be.eql(2);
    })   

     it('should return true if number of components is 5', function () {
        let uf = new algolib.UnionFind();
        uf.connect(1, 3);
        uf.connect(4, 9);
        uf.connect(12, 16);
        uf.connect(17, 26);
        uf.connect(74, 91);
        let numberOfComponents = uf.count();
        numberOfComponents.should.be.eql(5);
    })

    //component
    it('should return component name', function () {
       let uf = new algolib.UnionFind();
       uf.connect(3, 5);
       let componentName = uf.component(3);
       componentName.should.be.eql(5);
   })

    it('should return undefined if element not exists', function () {
       let uf = new algolib.UnionFind();
       uf.connect(3, 8);
       (uf.component(91) ===undefined).should.be.true();
   })

    it('should return component name', function () {
       let uf = new algolib.UnionFind();
       uf.connect(1, 3);
       uf.connect(3, 6);
       uf.connect(6, 9);
       let componentName = uf.component(1);
       componentName.should.be.eql(9);
   })
})
