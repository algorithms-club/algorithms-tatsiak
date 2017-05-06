/**
 * Created by tatsiak on 4/1/17.
 */
'use strict'
const algolib = require('../index.js');

describe('#quickUnionWeighted', function () {

    describe('#connect', function () {
        it('should return true if elements are connected', function () {
            let quickUnionWeighted = new algolib.QuickUnionWeighted();
            quickUnionWeighted.connect(1, 5);
            let isElementsConnected = quickUnionWeighted.isConnected(1, 5);
            isElementsConnected.should.be.true();
        });
        it('should return true if elements are connected', function () {
            let quickUnionWeighted = new algolib.QuickUnionWeighted();
            quickUnionWeighted.connect(1, 5);
            quickUnionWeighted.connect(5, 10);
            let isElementsConnected = quickUnionWeighted.isConnected(1, 10);
            isElementsConnected.should.be.true();
        })
        it('should connect element with smaller size to element with bigger size', function () {
            let quickUnionWeighted = new algolib.QuickUnionWeighted();
            quickUnionWeighted.connect(1, 5);
            quickUnionWeighted.connect(5, 10);
            quickUnionWeighted.connect(11, 12);
            quickUnionWeighted.connect(12, 13);
            quickUnionWeighted.connect(13, 15);
            let componentNameBeforeMerge = quickUnionWeighted.component(10);
            componentNameBeforeMerge.should.be.eql(1);
            quickUnionWeighted.connect(10, 15);
            let componentNameAfterMerge = quickUnionWeighted.component(10);
            componentNameAfterMerge.should.be.eql(11);
        })
    });

    describe('#isConnected', function () {
        it('should create proper data structure', function () {
            let quickUnionWeighted = new algolib.QuickUnionWeighted();
            quickUnionWeighted.connect.should.be.instanceOf(Function);
            quickUnionWeighted.isConnected.should.be.instanceOf(Function);
        });

        it('should return false if elements are not connected', function () {
            let quickUnionWeighted = new algolib.QuickUnionWeighted();
            let isElementsConnected = quickUnionWeighted.isConnected(7, 3333);
            isElementsConnected.should.be.false();
        })
    });

    describe('#count', function () {
        it('should return 1', function () {
            let quickUnionWeighted = new algolib.QuickUnionWeighted();
            quickUnionWeighted.connect(3, 6);
            quickUnionWeighted.count().should.be.eql(1);
        });

        it('should return 2', function () {
            let quickUnionWeighted = new algolib.QuickUnionWeighted();
            quickUnionWeighted.connect(1, 3);
            quickUnionWeighted.connect(7, 13);
            quickUnionWeighted.count().should.be.eql(2);
        });

        it('should return 5', function () {
            let quickUnionWeighted = new algolib.QuickUnionWeighted();
            quickUnionWeighted.connect(1, 3);
            quickUnionWeighted.connect(4, 9);
            quickUnionWeighted.connect(12, 16);
            quickUnionWeighted.connect(17, 26);
            quickUnionWeighted.connect(74, 91);
            quickUnionWeighted.count().should.be.eql(5);
        })
    });

    describe('#component', function () {
        it('should return undefined if element not exists', function () {
            let quickUnionWeighted = new algolib.QuickUnionWeighted();
            quickUnionWeighted.connect(3, 8);
            (quickUnionWeighted.component(91) === undefined).should.be.true();
        });

        it('should return component name', function () {
            let quickUnionWeighted = new algolib.QuickUnionWeighted();
            quickUnionWeighted.connect(1, 3);
            quickUnionWeighted.connect(3, 6);
            quickUnionWeighted.connect(6, 9);
            quickUnionWeighted.connect(9, 11);
            quickUnionWeighted.connect(12, 16);
            quickUnionWeighted.connect(16, 18);
            quickUnionWeighted.connect(18, 20);
            quickUnionWeighted.connect(20, 21);
            let componentName11 = quickUnionWeighted.component(11);
            componentName11.should.be.eql(1);
            let componentName21 = quickUnionWeighted.component(21);
            componentName21.should.be.eql(12);
        })
    })
});
