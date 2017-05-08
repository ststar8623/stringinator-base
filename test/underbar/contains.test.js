const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    // Your code goes here
    expect(_.contains([1,2,3], 2)).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    // Your code goes here
    expect(_.contains([1,2,3], 5)).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    // Your code goes here
    const obj = {
      '1': 1,
      '2': 2,
      '3': 3
    };

    expect(_.contains(obj, 3)).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    // Your code goes here
    const obj = {
      '1': 1,
      '2': 2,
      '3': 3
    };

    expect(_.contains(obj, 5)).toBe(false);
  });

});