'use strict'


function beautifulYear(y) {
    while (true) {
        y = ++y;
        var str = String(y);
        var set = new Set(str.split(''));
        if (set.size == 4) {
            break;
        }
    }
    return (y);
};
module.exports = beautifulYear