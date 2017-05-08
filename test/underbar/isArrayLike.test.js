const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    // Your code goes here
    const arr = [1,2,3];
    expect(_.isArrayLike(arr)).toBe(true);
  });

  it('returns true for an array-like object', () => {
    // Your code goes here
    const arrLikeObj = {
      length: 1
    };
    expect(_.isArrayLike(arrLikeObj)).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    // Your code goes here
    const nonArrLikeObj = {
      'first': 'steven',
      'last': 'leung',
      'age': 21
    };
    expect(_.isArrayLike(nonArrLikeObj)).toBe(false);
  });
});
