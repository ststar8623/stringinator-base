const _ = require('../../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    // Your code goes here
    const arr = [1,2,3,4,5];
    expect(_.reduce(arr, (acc, num) => acc + num)).toBe(15);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    // Your code goes here
    const arr = [1,2,3,4,5];
    expect(_.reduce(arr, (acc, num) => acc + num, 10)).toBe(25);
  });

});