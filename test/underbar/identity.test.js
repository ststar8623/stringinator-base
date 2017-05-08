const _ = require('../../underbar');

describe('identity()', () => {
  it('returns null if given null', () => {
    // Your code goes here
    expect(_.identity(null)).toBe(null);
  });

  it('returns the number if given a number', () => {
    // Your code goes here
    expect(_.identity(4)).toBe(4);
  });

  it('returns the same array if given an array', () => {
    // Your code goes here
    const array = [1, 2, 3];
    expect(_.identity(array)).toEqual(array);
  });

  it('returns the same object if given an object', () => {
    // Your code goes here
    const object = {
      1:1, 
      'number': 3, 
      'string': 'steven'
    };
    expect(_.identity(object)).toEqual(object);
  });
});