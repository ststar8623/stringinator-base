const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    // Your code goes here
    const arr = ['a', 'b', 'c'];
    let count = 0;
    _.each(arr, (element, index, array)=>{
      expect(element).toEqual(array[index]);
      count++;
    });
    expect(count).toBe(3);
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    // Your code goes here
    const obj = {
      1: 'a',
      2: 'b',
      3: 'c'
    };
    let count = 0;
    _.each(obj, (element, key, obj)=>{
      expect(element).toEqual(obj[key]);
      count++;
    });
    expect(count).toBe(3);
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    // Your code goes here
    const obj = {
      name: 'steven',
      age: 21,
      student: true
    };
    let count = 0;
    _.each(obj, (element, key, obj)=>{
      expect(element).toEqual(obj[key]);
      count++;
    });
    expect(count).toBe(3);
  });
});

