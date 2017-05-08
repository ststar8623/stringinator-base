const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    // Your code goes here
    const arr = [1,2,3,4,5];
    expect(_.filter(arr, num => num % 2 !== 0)).toEqual([1,3,5]);
  });

  it('filters an object to only numeric values', () => {
    const obj = {
      '1': 1,
      '2': 2,
      '3': 'steven',
      '4': 'leung'
    };

    expect(_.filter(obj, el => el === Number(el))).toEqual([1,2]);
    // Your code goes here
  });
});