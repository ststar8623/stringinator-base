const _ = require('./underbar');

const first = function(str, n = 1) {
  // Your code goes here
  const arr = str.split('');
  return n === 1 ? arr[0] : arr.splice(0, n).join('');
};

const last = function(str, n = 1) {
  // Your code goes here
  const arr = str.split('');
  return n === 1 ? arr[arr.length -1] : arr.splice(Math.max(0, arr.length - n)).join('');
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
};

const countChars = function(str) {
  // Your code goes here
};

const dedup = function(str) {
  // Your code goes here
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