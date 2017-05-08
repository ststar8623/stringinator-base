const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    // Your code goes here
    const arr = [1,2,1,2,1,2];
    expect(_.uniq(arr)).toEqual([1,2]);
  });
});