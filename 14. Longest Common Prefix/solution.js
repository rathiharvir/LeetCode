/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let output = ''
    let arr = strs[0].split('')
    let check = true
    for(let i = 0; i < arr.length; i++) {
        let prefix = output + arr[i]
        for(let j = 1; j < strs.length; j++) {
            let str = strs[j]
            if(!str.startsWith(prefix)) {
                check = false
            }
        }
        if(!check) {
            break;
        }
        output = prefix
    }
    return output
};