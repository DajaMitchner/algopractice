// QUESTION:
// Create a function that will take any amount of money and break it down to the smallest number of bills as possible. Only integer amounts will be input, NO floats. This function should output a sequence, where each element in the array represents the amount of a certain bill type. The array will be set up in this manner:
// array[0] ---> represents $1 bills
// array[1] ---> represents $5 bills
// array[2] ---> represents $10 bills
// array[3] ---> represents $20 bills
// array[4] ---> represents $50 bills
// array[5] ---> represents $100 bills
// In the case below, we broke up $365 into 1 $5 bill, 1 $10 bill, 1 $50 bill, and 3 $100 bills.



// SOLUTION:
// function giveChange(amount) {
//     const bills = [100, 50, 20, 10, 5, 1];
//     const change = bills.map(bill => {
//       let result = Math.floor(amount / bill);
//       amount = amount % bill;
//       return result;
//     })
//     return change.reverse();
//   }