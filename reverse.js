/**
 * leetcode
 * 整数反转
 * @param {*} x
 */
const reverse = x => {
  let prefix = "",
    result;
  if (x < 0) {
    prefix = "-";
    x = 0 - x;
  }
  result = (x + "")
    .split("")
    .reverse()
    .join("");
  if (
    result.length > 10 ||
    (result.length === 10 &&
      result > (x < 0 ? Math.pow(2, 31) : Math.pow(2, 31) - 1))
  ) {
    return 0;
  } else {
    return parseInt(prefix + result);
  }
};

console.log(reverse(-1234567890));
