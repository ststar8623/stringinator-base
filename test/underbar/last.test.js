const _ = require('../../underbar');

describe('last()', () => {
  it('returns the last element of an array', () => {
    // Your code goes here
    expect(_.last([1,2,3])).toEqual(3);
  });

  it('returns the last 2 elements of an array', () => {
    // Your code goes here
    expect(_.last([1,2,3], 2)).toEqual([2,3]);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    // Your code goes here
    expect(_.last([1,2,3], 5)).toEqual([1,2,3]);
  });
});