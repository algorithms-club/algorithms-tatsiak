/**
 * Created by tatsiak on 4/1/17.
 */
'use strict'
class QuickUnionWeighted {
    constructor() {
        this._elements = [];
        this._size = [];
    }
    connect(a, b) {
        if (this.isConnected(a, b)) return;
        if (isNaN(this._elements[a])) this._elements[a] = a;
        if (isNaN(this._elements[b])) this._elements[b] = b;

        let parentA = this.component(a, this._elements);
        let parentB = this.component(b, this._elements);

        if (isNaN(this._size[parentA])) this._size[parentA] = 1;
        if (isNaN(this._size[parentB])) this._size[parentB] = 1;

        if (this._size[parentA] > this._size[parentB]) {
            this._elements[parentA] = parentB;
            this._size[parentB] += this._size[parentA];
        }
        else {
            this._elements[parentB] = parentA;
            this._size[parentA] += this._size[parentB];
        }
    }

    isConnected(a, b) {
        if (isNaN(this._elements[a]) || isNaN(this._elements[b])) {
            return false;
        }
        let rootA = this.component(a, this._elements);
        let rootB = this.component(b, this._elements);
        return rootA === rootB;
    }

    count() {
        let count = 0;
        for (var i = 0; i < this._elements.length; i++) {
            if (this._elements[i] === i)
                count++;
        }
        return count;
    }

    component(a) {
        if (this._elements[a] === a) {
            return a;
        }
        else {
            return this._elements[this._elements[a]]
        }
    }
}
module.exports = QuickUnionWeighted;