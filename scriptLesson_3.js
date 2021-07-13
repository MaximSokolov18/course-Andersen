function chekPalindrome(str) {
  const editStr = str
    .split('')
    .filter((litter) => litter !== ' ' && litter !== ',');
  return editStr.join('') === editStr.reverse().join('');
}

function getNumberVowels(str) {
  const vowels = ['a', 'u', 'i', 'o', 'e'];
  return str.split('').filter((litter) => vowels.includes(litter)).length;
}

Array.prototype.myFilter = function (callback, thisArg = this) {
  let result = [];
  for (let i = 0; i < thisArg.length; i++) {
    if (callback(thisArg[i], i, thisArg)) {
      result.push(thisArg[i]);
    }
  }
  return result;
};
