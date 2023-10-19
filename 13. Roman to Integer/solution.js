/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const data = {
      I : 1,
      V : 5,
      X : 10,
      L : 50,
      C : 100,
      D : 500,
      M : 1000
  };

  let output = 0
  let sArray = s.split('')
  for(let i = 0; i < sArray.length; i++) {
      if(data[sArray[i]] < data[sArray[i+1]]) {
          output -= data[sArray[i]]
      } else {
          output += data[sArray[i]]
      }
  }

  return output
};