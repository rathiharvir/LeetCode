/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minimumprice = prices[0], profit = 0
    for(let i = 1; i < prices.length; i++) {
        if(prices[i] < minimumprice) {
            minimumprice = prices[i];
        } else {
            if(prices[i] - minimumprice > profit) {
                profit = prices[i] - minimumprice
            }
        }
    }
    return profit
};