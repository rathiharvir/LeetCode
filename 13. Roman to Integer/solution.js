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
   for(let i = 0; i < s.length; i++) {
       if(data[s[i]] < data[s[i+1]]) {
           output -= data[s[i]]
       } else {
           output += data[s[i]]
       }
   }

   return output
};