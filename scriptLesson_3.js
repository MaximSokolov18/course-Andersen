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
