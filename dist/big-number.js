"use strict";
const BigNumberJS = require('bignumber.js');

Object.defineProperty(exports, "__esModule", { value: true });
class BigNumber {
    constructor(value) {
        this.value = this.toBigNumber(value);
    }
    static make(value) {
        return new BigNumber(value);
    }
    plus(other) {
        return new BigNumber(this.value + this.toBigNumber(other));
    }
    minus(other) {
        return new BigNumber(this.value - this.toBigNumber(other));
    }
    times(other) {
        return new BigNumber(this.value * this.toBigNumber(other));
    }
    dividedBy(other) {
        return new BigNumber(this.value / this.toBigNumber(other));
    }
    div(other) {
        return this.dividedBy(other);
    }
    isZero() {
        return this.value === new BigNumberJS(0);
    }
    comparedTo(other) {
        const b = this.toBigNumber(other);
        if (this.value > b) {
            return 1;
        }
        if (this.value < b) {
            return -1;
        }
        return 0;
    }
    isLessThan(other) {
        return this.value < this.toBigNumber(other);
    }
    isLessThanEqual(other) {
        return this.value <= this.toBigNumber(other);
    }
    isGreaterThan(other) {
        return this.value > this.toBigNumber(other);
    }
    isGreaterThanEqual(other) {
        return this.value >= this.toBigNumber(other);
    }
    isEqualTo(other) {
        return this.value === this.toBigNumber(other);
    }
    isNegative() {
        return this.value < 0;
    }
    toFixed() {
        return this.value.toString();
    }
    toString(base = 10) {
        return this.value.toString(base);
    }
    toJSON() {
        return this.toFixed();
    }
    toBigNumber(value) {
        if (value instanceof BigNumber) {
            value = value.value;
        }

        return new BigNumberJS(value);
    }
}
exports.BigNumber = BigNumber;
BigNumber.ZERO = new BigNumber(0);
BigNumber.ONE = new BigNumber(1);
BigNumber.SATOSHI = new BigNumber(1e8);
//# sourceMappingURL=big-number.js.map