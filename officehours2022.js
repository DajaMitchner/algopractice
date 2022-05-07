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


//QUESTION:
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!





// SOLUTION:
// function betterThanAverage(classPoints, yourPoints) {
//     var sum = 0;
//     for (var i = 0; i < classPoints.length; i++){
//       sum += classPoints[i];
//     }
//       sum = sum/classPoints.length
//     if(sum > yourPoints) {
//       return false
//     } else {
//       return true
//     } 
//   }
  