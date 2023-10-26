/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a = a.split('').reverse()
    b = b.split('').reverse()
    let aLength = a.length
    let bLength = b.length
    

    let length = aLength > bLength ? bLength : aLength
    let output = [], carry = 0
    
    for(let i = 0; i < length; i++) {
      if(parseInt(a[i]) + parseInt(b[i]) + carry === 3) {
          output.push(1)
          carry = 1
      } else if (parseInt(a[i]) + parseInt(b[i]) + carry === 2) {
          output.push(0)
          carry = 1
      } else {
          output.push(parseInt(a[i]) + parseInt(b[i]) + carry)
          carry = 0
      }
    }
    
    if(aLength > bLength){
      for(let i = bLength; i < aLength; i++) {
        if(carry) {
            if (parseInt(a[i]) + carry === 2) {
                output.push(0)
                carry = 1
            } else {
                output.push(parseInt(a[i]) + carry)
                carry = 0
            }
        } else {
            output.push(parseInt(a[i]))
        }
      }
    }
    if(bLength > aLength){
      for(let i = aLength; i < bLength; i++) {
          if(carry) {
              if (parseInt(b[i]) + carry === 2) {
                  output.push(0)
                  carry = 1
              } else {
                  output.push(parseInt(b[i]) + carry)
                  carry = 0
              }
          } else {
              output.push(parseInt(b[i]))
          }
      }
    }
    if(carry){
      output.push(carry)
    }
    return output.reverse().join('')
};