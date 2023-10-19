/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // return x.toString() === x.toString().split('').reverse().join('')
    var reverse = 0;
    var copy = x;

    while (copy > 0) {
      const digit = copy % 10;
      reverse = reverse * 10 + digit;
      copy = ~~(copy / 10);
    }

    return reverse == x;
};