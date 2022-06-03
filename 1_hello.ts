'use strict';
// First example ==> nothing is happen
console.log('Hello world');

// Second example
const greet = (person: string, date: Date): void => {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
};

greet('Brendan', new Date());

// Third example
let clickCount: number = 1;
const clickedTimes = (clickCount: number): string => {
  if (clickCount === 1) {
    return 'first click';
  } else if (clickCount === 2) {
    return 'second click';
  } else if (clickCount === 0) {
    return 'no click';
  } else {
    return 'more than 3 click';
  }
};
console.log(clickedTimes(clickCount));

// Fourth example
const isLoading: boolean = false;
const data: number[] = [];
const uri: string = 'http://localhost:3000';
const fetchData = (uri: string, isLoading: boolean): void => {};

export {};
