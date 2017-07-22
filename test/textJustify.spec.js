'use strict'
const algolib = require('../index.js');

describe.only('#textJustify', function () {
    describe('#extJustify', function () {
        it('should built strings no longer than second argument', function () {
            let str = "At ConHugeCo, we understand how to exploit vertically. Do you have a scheme to become B2C2B? Without meticulously-planned That is a remarkable achievement when you consider the current fiscal ye";
            let justify = new algolib.textJustify(str, 40);
            // console.log(justify)
        })
    });
});
