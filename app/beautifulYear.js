'use strict'


function beautifulYear(y) {
    while (true) {
        y = ++y;
        var str = String(y);
        var arr = str.split('');
        var unique = [];
        for (var i = 0; i < arr.length; i++) {
            if (unique.indexOf(arr[i]) == -1) {
                unique.push(arr[i]);
            }
        }
        if (unique.length == 4) {
            break;
        }
    }
    return (y);
};
module.exports = beautifulYear