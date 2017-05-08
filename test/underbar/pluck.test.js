const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    // Your code goes here
    const peopleObj = [
      { name: 'steven', age: 21 },
      { name: 'andy', age: 31 },
      { name: 'mom', age: 55 }
    ];

    expect(_.pluck(peopleObj, 'age')).toEqual([21,31,55]);
  });

});