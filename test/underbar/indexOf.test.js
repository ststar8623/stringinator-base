const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    // Your code goes here
    const arr = ['steven', 'leung', 'hackreactor'];
    expect(_.indexOf(arr, 'steven')).toBe(0);
  });

  it('returns the index of a value at the end of an array', () => {
    // Your code goes here
    const arr = ['steven', 'leung', 'hackreactor'];
    expect(_.indexOf(arr, 'hackreactor')).toBe(2);
  });

  it('returns -1 for a missing value', () => {
    // Your code goes here
    const arr = ['steven', 'leung', 'hackreactor'];
    expect(_.indexOf(arr, 'notfound')).toBe(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    // Your code goes here
    const arr = ['steven', 'leung', 'hackreactor', 'steven', 'leung'];
    expect(_.indexOf(arr, 'leung')).toBe(1);
  });

  it('starts searching at the given offset', () => {
    // Your code goes here
    const arr = ['steven', 'leung', 'hackreactor', 'steven', 'leung'];
    expect(_.indexOf(arr, 'leung', 2)).toBe(4);
  });

});