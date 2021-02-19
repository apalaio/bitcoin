export const getStyledDiff = num => {
  let result = { classColor: "", symbol: "" };
  if (num > 0) {
    result.classColor = "up";
    result.symbol = "+";
  } else if (num < 0) {
    result.classColor = "down";
  } else {
    result.classColor = "equal";
  }
  return result;
};
