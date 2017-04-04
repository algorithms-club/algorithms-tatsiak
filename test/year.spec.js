/**
 * Created by tatsiak on 3/30/17.
 */
'use strict'

const algolib = require('../index.js');

describe('#beautifulYear', function () {

    it('Return minimum year number that is strictly larger than y and all its digits are distinct.', function () {
        let beautifulYear = algolib.beautifulYear(1987);

        beautifulYear.should.be.eql(2013);
    })

    it('Return minimum year number that is strictly larger than y and all its digits are distinct.', function () {
        let beautifulYear = algolib.beautifulYear(2013);

        beautifulYear.should.be.eql(2014);
    })

})
