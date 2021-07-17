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

function createDebounceFunction(fun, time) {
  let timeout;
  return function () {
    const callFun = () => fun.apply(this, arguments);

    clearTimeout(timeout);

    timeout = setTimeout(callFun, time);
  };
}

function myBind(fun, thisArg, ...rest) {
  return function (...args) {
    return fun.apply(thisArg, rest.concat(args));
  };
}
