'use strict';
exports.__esModule = true;
// First example ==> nothing is happen
console.log('Hello world');
// Second example
var greet = function (person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
};
greet('Brendan', new Date());
// Third example
var clickCount = 1;
var clickedTimes = function (clickCount) {
    if (clickCount === 1) {
        return 'first click';
    }
    else if (clickCount === 2) {
        return 'second click';
    }
    else if (clickCount === 0) {
        return 'no click';
    }
    else {
        return 'more than 3 click';
    }
};
console.log(clickedTimes(clickCount));
