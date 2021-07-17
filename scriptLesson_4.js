function objectHell(str) {
  let obj = {};
  str
    .split('.')
    .reverse()
    .forEach((item, index) => {
      if (index === 0) {
        obj[item] = null;
        return;
      }
      const last = obj;
      obj = {};
      obj[item] = last;
    });

  return obj;
}
