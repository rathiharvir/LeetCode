/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const openSet = new Set(["{", "[", "("]);
  const closeMap = new Map([
      ['}', '{'],
      [')', '('],
      [']', '[']
  ]);

  for(let char of s) {
      if(openSet.has(char)) {
          stack.push(char)
      } else {
          if(stack.pop() != closeMap.get(char)) {
              return false;
          }
      }
  }

  return stack.length === 0
};