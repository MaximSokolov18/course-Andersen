function objectHell(str) {
  let obj = {};
  str
    .split('.')
    .reverse()
    .reduceRight((obj, item, index) => {
      if (index === 0) {
        return (obj[item] = null);
      }
      return (obj[item] = {});
    }, obj);

  return obj;
}

function createDebounceFunction(func, time) {
  let timeout;
  return function () {
    const callFun = () => fun.apply(this, arguments);

    clearTimeout(timeout);

    timeout = setTimeout(callFun, time);
  };
}

Function.prototype.myBind = function (context, ...args1) {
  const fn = this;
  return function (...args2) {
    return fn.apply(context, [...args1, ...args2]);
  };
};
