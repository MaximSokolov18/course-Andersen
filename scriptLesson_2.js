import { isEmpty, makePairs, isEqual } from './functionObj.js';

const data = {
  a: null,
  b: '',
  c: undefined,
};
const data2 = {
  a: 1,
  b: 2,
};
const data3 = {
  a: 1,
  b: 2,
};

console.log(isEqual(data2, data3));
console.log(isEqual(data2, data));
console.log(makePairs(data));
console.log(isEmpty(data));
console.log(isEmpty(data2));
