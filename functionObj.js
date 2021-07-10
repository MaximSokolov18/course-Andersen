export const isEqual = (firstObj, secondObj) => {
  return JSON.stringify(firstObj) === JSON.stringify(secondObj);
};

function isValid(value) {
  if (!value && value !== 0) {
    return false;
  }

  return true;
}

export const isEmpty = (object) => {
  const arrayValues = Object.values(object);

  if (arrayValues.length === 0) {
    return true;
  }

  if (arrayValues.some((item) => isValid(item))) {
    return false;
  } else {
    return true;
  }
};
