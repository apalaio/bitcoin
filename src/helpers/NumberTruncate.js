export const getTruncatedNumber = (num, dec) => {
  return num.toString().slice(0, num.toString().indexOf(".") + dec + 1);
};
