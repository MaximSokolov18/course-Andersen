export const isEqual = (firstObj, secondObj) => {
  return JSON.stringify(firstObj) === JSON.stringify(secondObj);
};
