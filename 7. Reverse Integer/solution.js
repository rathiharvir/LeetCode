/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let revNum = 0;
  while (x!==0) {
      revNum = revNum * 10 + x % 10;
      x = parseInt(x/10); 
      if (revNum < -2147483648 || revNum > 2147483648 - 1) return 0
  }
  return revNum
};