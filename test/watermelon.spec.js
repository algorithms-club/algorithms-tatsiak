/**
 * Created by tatsiak on 3/30/17.
 */
'use strict'

const algolib = require('../index.js');

describe('#divideWatermelon', function()  {

    it('Print Yes, if it is possible to divide watermelon into two parts, each of them has even weight', function () {
        let divideWatermelon = algolib.divideWatermelon(8);

        divideWatermelon.should.be.eql('Yes');
    })

    it('Print No, cause it is not possible to divide watermelon into two parts, each of them has even weight', function () {
        let divideWatermelon = algolib.divideWatermelon(5);

        divideWatermelon.should.be.eql('No');
    })
})
