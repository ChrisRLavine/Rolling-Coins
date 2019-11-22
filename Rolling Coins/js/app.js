//Coin Roller
// var coins = [
//     penny = 0,
//     nickle = 0,
//     dime = 0,
//     quarter = 0
// ]
// let wrapper = 0;

// for (coin in coins) {
//     if (coin == pennies) {
//     let wrapper = Math.round(coins[coin] / 50);
//     console.log(coin + ':' + wrapper);
//     console.log(coins.penny + 'pennies equal $', coins.pennies * .01 + 'and makes', wrapper + 'rolls');
// } else if (coin == dimes) {
//     let wrapper = Math.round(coins[coin] / 50);
//     console.log(coin + ':' + wrapper);
//     console.log(coins.dimes + 'dimes equal $', coins.dimes * .1 + 'and makes', wrapper + 'rolls');
// } else if (coin == nickles) {
//     let wrapper = Math.round(coins[coin] / 40);
//     console.log(coin + ':' + wrapper);
//     console.log(coins.nickles + 'nickles equal $', coins.nickle * .05 + 'and makes', wrapper + 'rolls');   
// } else of (coin == quarter); {
//     let wrapper = Math.round(coins[coin] / 40);
//     console.log(coin + ':' + wrapper);
//     console.log(coins.quarters + 'quarters equal $', coins.quarter * .25 + 'and makes', wrapper + 'rolls');   
// }
// remainder = coins[coin] % 40;
// }



function roller(penny, nickle, dime, quarter) {
    let coins = {
        penny: .01,
        nickle: .05,
        dime: .1,
        quarter: .25
    };

    totalAmount = (penny * coins.penny) + (nickle * coins.nickle) + (dime * coins.dime) + (quarter * coins.quarter)
    
    console.log('You have $' + totalAmount + '.');
    
    return totalAmount;
}
 
roller(100,100,10,10);

