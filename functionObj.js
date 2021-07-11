export const isEqual = (firstObj, secondObj) => {
  const firstValues = Object.values(firstObj);
  const secondValues = Object.values(secondObj);

  if (firstValues.length !== secondValues.length) {
    return false;
  }

  return !firstValues.some((item, index) => item !== secondValues[index]);
};

export const isEmpty = (object) => {
  const arrayValues = Object.values(object);

  if (arrayValues.length === 0) {
    return true;
  }

  return !arrayValues.some((item) => !!item && item !== 0);
};

export const makePairs = (object) => {
  return Object.keys(object).map((item) => [item, object[item]]);
};
