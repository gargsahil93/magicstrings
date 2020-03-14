export default {
    add : (a, b) => {
        if (a.length < 10 && b.length < 10) {
            return (+a + +b).toString();
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
            carryover = newC.slice(0, newC.length-1);
            c = c + newC[newC.length-1];
        });
        if (carryover !== 0) {
            c = c + carryover;
        }
        return c.split("").reverse().join("");
    }
}