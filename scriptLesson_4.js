function objectHell(str) {
  return str.split('.').reduceRight((obj, next) => ({ [next]: obj }), null);
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

console.log(objectHell('b.v.d'));
