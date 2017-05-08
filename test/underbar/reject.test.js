const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    // Your code goes here
    const nums = [1,2,3,4,5];
    expect(_.reject(nums, num => num % 2 !== 0)).toEqual([2,4]);
  });

  it('rejects null values from an object', () => {
    // Your code goes here
    const order = {
      '1': 1,
      '2': 2,
      '3': 3,
      '4': null,
      '5': null
    };
    expect(_.reject(order, (value) => value === null)).toEqual([1,2,3]);
  });
});