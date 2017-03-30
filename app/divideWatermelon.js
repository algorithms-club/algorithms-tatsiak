'use strict'


function divideWatermelon(weight) {
    return (weight % 2 == 0 && weight > 2 ? "Yes" : "No");
};
module.exports = divideWatermelon;