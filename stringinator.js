const _ = require('./underbar');

const first = function(str, n = 1) {
  // Your code goes here
  return n === 1 ? str[0] : str.slice(0, n);
};

const last = function(str, n = 1) {
  // Your code goes here
  return n === 1 ? str[str.length -1] : str.slice(Math.max(0, str.length - n));
};

const removeChar = function(str, target) {
  // hint: use _.reject
  // Your code goes here
  const arr = str.split('');
  return _.reject(arr, letter => letter === target).join('');
};

const hasChar = function(str, target) {
  // hint: use _.some
  // Your code goes here
  const arr = str.split('');
  return _.some(arr, letter => letter === target);
};

const isOnlyDigits = function(str) {
  // Your code goes here
  const arr = str.split('');
  return _.every(arr, char => char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57);
};

const filterToOnlyDigits = function(str) {
  // Your code goes here
  const arr = str.split('');
  return _.filter(arr, num => Number(num)).join('');
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  // hint: use truncateString above
  // Your code goes here
  const result = [];
  for(let key in obj){
    result.push(truncateString(obj[key], maxLength));
  };
  return result;
};

const countChars = function(str) {
  // Your code goes here
  const arr = str.split('');
  return _.reduce(str, (obj, currentValue)=>{
    if(obj[currentValue] === undefined){
      obj[currentValue] = 1;
    } else {
      obj[currentValue]++;
    }
    return obj;
  }, {});
};

const dedup = function(str) {
  // Your code goes here
  return _.uniq(str).join('');
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};

console.log(countChars('mississippi'))