function chekPalindrome(str) {
  const editStr = str
    .split('')
    .filter((litter) => litter !== ' ' && litter !== ',');
  return editStr.join('') === editStr.reverse().join('');
}
