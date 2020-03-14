const assert = require('assert');
const math = require('../main');

describe('Add', function () {
    it('small number addition', () => assert.equal(math.add(1, 2), '3'));

    it('small string addition', () => assert.equal(math.add('1', '2'), '3'));

    it('big digit strings', () => assert.equal(math.add('1111111111111111111111', '2222222222222222222222'), '3333333333333333333333'));

    it('big digit numbers', () => assert.equal(math.add(111111111111, 222222222222), '333333333333'));

    it('more than 2 numbers', () => assert.equal(math.add(1, 2, 3), '6'));

    it('more than 2 strings', () => assert.equal(math.add('1', '2', '3'), '6'));

    it('negative numbers small', () => assert.equal(math.add(-1, 2), '1'));

    it ('negative strings small', () => assert.equal(math.add('-1', '2'), '1'));

    it('negative strings big', () => assert.equal(math.add('-11111111111111111111', '22222222222222222222'), '11111111111111111111'));

    it('single number', () => assert.equal(math.add('1'), '1'));

    it('negative result', () => assert.equal(math.add('-1', '-2'), '-3'));

    it('negative result big', () => assert.equal(math.add('-11111111111111111111', '-22222222222222222222'), '-33333333333333333333'));

    it('decimal addition', () => assert.equal(math.add('1.00000000000000001', '2.00000000000000002'), '3.00000000000000003'));

    it('0 addition', () => assert.equal(math.add('000000000000000000001', '00000000000000000000000000000000000000002'), '3'));

    it('carryover addition', () => assert.equal(math.add('99999999999999999999', 1), '100000000000000000000'));

    it('in between 0', () => assert.equal(math.add('100000000001', '200000000002'), '300000000003'));

    it('decimal addition small', () => assert.equal(math.add(1.1, 2.2), '3.3'));

    it('decimal', () => assert.equal(math.add(.1, .2), '.3'));
});