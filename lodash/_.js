const _ = {
    // Math.max()
    // Math.min()
    clamp(num, lowerBound, upperBound) {
        if (num < lowerBound) {
            return lowerBound;
        } else if (num > upperBound) {
            return upperBound;
        } else {
            return num;
        }
    },
    inRange(num, start, end = 0) {
        if (start > end) {
            if (num < end || start <= num) {
                return false;
            } else {
                return true;
            };
        } else if (start < end) {
            if (start <= num && num < end) {
                return true;
            } else {
                return false;
            }
        };

    },

    words(str) {
        const words = str.split(' ');
        return words;
    },

    pad(str, len) {
        if (str.length >= len) {
            return str;
        } else {
            let del = len - str.length;
            const space = ' ';
            return space.repeat(Math.floor(del / 2)) + str + space.repeat(Math.ceil(del / 2));
        };
    },
    has(obj, key) {
        let keys = Object.keys(obj);
        //console.log(keys);
        return keys.includes(key);
    },

    invert(object) {
        const newObject = {};
        for (const prep in object) {
            let originalValue = object[prep];
            newObject[originalValue] = prep;
        };
        return newObject;
    },

    findKey(object, func) {
        for (const prep in object) {
            let currentValue = object[prep];
            //let predicateReturnValue = func(currentValue);
            if (func(currentValue)) {
                return prep;
            };
        };
        return undefined;
    },

    drop(array, num = 1) {
        let newArray = array.slice(num);
        return newArray;
    },
    dropWhile(array, predicate) {
        let dropNumber = array.findIndex(function (element, index) {
            return !predicate(element, index, array);
        });
        let droppedArray = this.drop(array, dropNumber);
        return droppedArray;
    },

    chunk(array, size = 1) {
        let chunks = [];
        let uneven = array.length % size;
        let n = Math.floor(array.length / size);
        //console.log(`n = ${n}`);
        if (uneven === 0) {
            for (i = 0; i < array.length; i = i + size) {
                //console.log(`i = ${i}`);
                chunks.push(array.slice(i, i + size));
                //console.log(array.slice(i,i+n))
            };
        } else {
            for (i = 0; i < array.length - uneven + 1; i = i + size) {
                //console.log(`i = ${i}`);
                chunks.push(array.slice(i, i + size));
                //console.log(array.slice(i,i+n))
            };
        };
        return chunks;
    }


};




// Do not write or modify code below this line.
module.exports = _;