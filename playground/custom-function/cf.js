console.log('I am in cf.js');

function calculateBill(billAmount2 = 890, taxRate) {
        billAmount2 = billAmount;
        return Math.round(billAmount2 * ((100 + taxRate) / 100));
}

const billAmount = 20;
const bill100 = 100;
console.log('$100 and 13% = ', calculateBill(undefined, 13));
console.log('$200 and 13% = ', calculateBill(200, 13));
console.log('$200 and 20% = ', calculateBill(200, 20));
// const totalBill = calculateBill();
// console.log(`My total bill is $${totalBill}`);
// console.log(`Advanced - My total bill is $${calculateBill()}`);
console.log(4, ' SOME TEXT ', 5);
console.log(' GREAT NEWS GUYS ');
