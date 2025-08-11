    var fn, magicArray;

    fn = {
    getFiltered(predicate) {
        let result = this.filter(x => predicate(x));
        return Object.assign(result, fn);
    },
    getRejected(predicate) {
        let result = this.filter(x => !predicate(x));
        return Object.assign(result, fn);
    },
    getSplit(predicate) {
        let pass = this.filter(x => predicate(x));
        let fail = this.filter(x => !predicate(x));
        Object.assign(pass, fn);
        Object.assign(fail, fn);
        return { pass, fail };
    },
    count() {
        return this.length;
    },
    double() {
        let originalLength = this.length;
        for (let i = 0; i < originalLength; i++) {
        this.push(this[i]);
        }
        return this;
    },
    multiply(a) {
        for (let i = 0; i < this.length; i++) {
        if (typeof this[i] === 'number') {
            this[i] *= a;
        }
        }
        return this;
    },
    first() {
        return Object.assign([this[0]], fn);
    },
    last() {
        return Object.assign([this[this.length - 1]], fn);
    },
    eq(a) {
        return this.length - 1 >= a ? Object.assign([this[a]], fn) : this;
    }
    };

    magicArray = function(...args) {
    let arr;
    if (args.length === 1 && Array.isArray(args[0])) {
        arr = args[0];
    } else {
        arr = args;
    }
    Object.assign(arr, fn);
    return arr;
    };
