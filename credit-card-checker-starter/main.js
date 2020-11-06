// @ts-check
// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]
const valid6 = [4, 5, 3, 9, 6, 8, 9, 8, 8, 7, 7, 0, 5, 7, 9, 8]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Validate the given cards. return true or false:
const validateCred = (array) => {
    let validation = new Array(array.length);
    validation[(validation.length) - 1] = array[(validation.length) - 1];
    for (let i = array.length - 1; i >= 0; i--) {
        if ((array.length - 1 - i) % 2 != 0) {
            if (array[i] * 2 > 9) {
                validation[i] = (array[i] * 2 - 9);
            } else {
                validation[i] = (array[i] * 2);
            };
        } else {
            validation[i] = (array[i]);
        };

    };
    //validation.push(array[(array.length - 1)]);
    let sum = 0;
    for (const digit of validation) {
        sum = sum + digit;
    };
    //console.log(sum);
    if (sum % 10 === 0) {
        return true;
    } else {
        return false;
    };


}
//Find the invalid cards numbers among a array of cars
const findInvalidCards = (array) => {
    const invalidCards = array.filter(card => {
        if (!validateCred(card)) {
            return card;
        }
    });
    return invalidCards;

}
// map the invalid cards to the companies who issued the invalid cards
const idInvalidCardCompanies = (array) => {
    const firstDigit = [];
    const companies = [];
    for (const invalid of array) {
        firstDigit.push(invalid[0]);
    };

    //console.log(firstDigit);
    if (firstDigit.includes(3)) {
        companies.push('Amex(American Express)');
    };
    if (firstDigit.includes(4)) {
        companies.push('Visa');
    };
    if (firstDigit.includes(5)) {
        companies.push('Master');
    };
    if (firstDigit.includes(6)) {
        companies.push('Discover');
    };
    if (firstDigit.some(element => (element < 3 || element > 6))) {
        companies.push('Company not found');
    };
    return companies;
}
// if the card numbers are in string, convert it into array
const stringToArray = string => {
    let strDigits = (string.split(''));
    let digits = []
    for (const item of strDigits) {
        digits.push(parseInt(item));
    }
    return digits;
}
// convert a list of string card numbers into arrays
const arrayStringToArray = array => {
    const batchArray = [];
    for (const item of array) {
        let strDigits = (item.split(''));
        //console.log(strDigits);
        let digits = []
        for (let i=0; i < strDigits.length;i++) {
            digits.push(parseInt(strDigits[i]));
        };
        batchArray.push(digits);

    }
    
    return batchArray;
}


/* some card number examples for testing:
const card1 = '453275589806122940240071236396594556952175321652385';
const card2 = '379549893549583374555225281782378002789001294';
const card3 = '353857547778635035428179257484403534765549814957128';
const card4 = '540950381257754127209933480489445256445444060765';
const batch2 = [card1, card2, card3, card4];
console.log(idInvalidCardCompanies(findInvalidCards(arrayStringToArray(batch2))));
//console.log(validateCred(stringToArray(card1)));
*/







