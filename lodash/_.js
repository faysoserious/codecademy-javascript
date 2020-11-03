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
    }


};




// Do not write or modify code below this line.
module.exports = _;