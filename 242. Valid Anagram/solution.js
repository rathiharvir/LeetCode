/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) return false;
    const letterCounts = new Array(26).fill(0);

    for (let i = 0; i < s.length; ++i) {
        letterCounts[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        letterCounts[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    return letterCounts.every(count => count === 0);
};