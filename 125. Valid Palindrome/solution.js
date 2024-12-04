/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const sanitizedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    if(sanitizedString.length === 0) return true;

    let check = true; 
    const stringLength = sanitizedString.length
    for (let i = 0; i < stringLength / 2; i++) {
        if(sanitizedString[i] != sanitizedString[stringLength - i - 1])  {
            check = false;
            break;
        }
    }
    return check;
};