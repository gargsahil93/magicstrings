let add = function (...numbers) {
    if (numbers.length === 0) return '';
    if (numbers.length === 1) return numbers[0].toString();
    if (numbers.length > 2) return add(numbers[0], add(...numbers.slice(1, numbers.length)));
    let a  = numbers[0].toString(), b = numbers[1].toString();
    if (a.length === 1 && b.length === 1) return (+a + +b).toString();
    let negate = false;
    if (a[0] === '-' && b[0] === '-') {
        negate = true;
        a = a.slice(1, a.length);
        b = b.slice(1, b.length);
    }
    let decimalIndexA = a.indexOf('.'), decimalIndexB = b.indexOf('.');
    let decimalPlace;
    if (decimalIndexA !== -1 || decimalIndexB !== -1) {
        if (decimalIndexA === -1) a += '.', decimalIndexA = a.length-1;
        if (decimalIndexB === -1) b += '.', decimalIndexB = b.length-1;
        let aFromEnd = a.length - decimalIndexA;
        let bFromEnd = b.length - decimalIndexB;
        let add0 = '';
        let diff = Math.abs(aFromEnd - bFromEnd);
        while(diff-- > 0) add0 += '0';
        aFromEnd > bFromEnd ? b+=add0 : a+=add0;
        let aSplit = a.split('.');
        let bSplit = b.split('.');
        if (aSplit.length > 2 || bSplit.length > 2) return 'INVALID INPUT';
        a = aSplit[0] + aSplit[1];
        b = bSplit[0] + bSplit[1];
        decimalPlace = aFromEnd > bFromEnd ? aFromEnd : bFromEnd;
    }
    if (a.length < b.length) {
        let c = a;
        a = b;
        b = c;
    }
    a = a.split("").reverse().join("");
    b = b.split("").reverse().join("");
    let c = '', carryover = '0';
    [...a].forEach((ch, index) => {
        let charB = b[index] || '0';
        let newC = add(add(ch, charB), carryover);
        carryover = newC.slice(0, newC.length - 1);
        c = c + newC[newC.length - 1];
    });
    if (carryover !== 0) c = c + carryover;
    while (c[c.length-1] === '0') c = c.slice(0, c.length-1);
    c = c.split("").reverse().join("");
    if (decimalPlace !== undefined) {
        let index = c.length - decimalPlace;
        c = c.slice(0, index+1) + '.' + c.slice(index+1);
    }
    if (negate) c = '-' + c;
    if (c === '') c = '0';
    return c;
}
module.exports = add;