//ShortestWord
// function findShort(s){
//     var arr = s.split(' ')
//     var short = arr[0]
//    for (var i = 0; i < arr.length; i++){
//      if (arr[i].length < short.length){
//        short = arr[i]
//      }
//    }
//      return short.length
//   }

// ELevator Distance
// function elevatorDistance(array) {
//     let newArray = [];
//     let sum =0; 
//           for(let i=0;i<array.length-1;i++){
//           newArray= array[i] - array[i+1];
//             newArray = newArray>0?newArray:(-newArray);
//             sum = sum + newArray;
//             }
//           return sum;
//         }

// separate basic types
// function separateTypes(input) {
//     let diffTypes = {
//     number: [],
//     string: [],
//     boolean: [],
//     }
//     for (let i = 0; i < input.length; i++) {
//     let different = typeof input[i]
//     //console.log(different)
//     if(different === "number") {
//     diffTypes.number.push(input[i])
//     }
//     else if(different === "string") {
//     diffTypes.string.push(input[i])
//     }
//     else if(different === "boolean") {
//     diffTypes.boolean.push(input[i])
//     }
//     }
//     if(diffTypes.boolean.length == 0) {
//     delete diffTypes.boolean
//     }
//     if(diffTypes.number.length == 0) {
//     delete diffTypes.number
//     }
//     if(diffTypes.string.length == 0) {
//     delete diffTypes.string
//     }
//     return diffTypes
//     }

// Highest and Lowest
// function highAndLow(numbers){
//     let array = numbers.split(' ')
//     let max = array[0]
//     let min = array[0]
//     for (let i = 1; i < array.length; i++){
//      let newNum = parseInt(array[i])
//       if (newNum > max) max = newNum;
//       if (newNum < min) min = newNum;
//     }
//      return max + ' ' + min
//    }

// Unique String Characters
// function solve(a,b){
//     var result = '';
//     for(let i=0;i<a.length;i++){
//         if(!(b.includes(a[i]))) result += a[i]
//     }
//     for(let i=0;i<b.length;i++){
//         if(!(a.includes(b[i]))) result += b[i]
//     }
//     return result;
// }

//Largest Elements
// function largest(n,xs){

//     xs.sort((a,b) => a-b)
//     if (n === 0){
//   return []
//     }
   
//   return xs.slice(-n)
// }

// simple consecutive pairs
// function pairs(ar){
//     let count = 0
//     for (let i = 0; i < ar.length; i+=2)
//     if (Math.abs(ar[i] - ar[i+1]) === 1)
//       count += 1
//       return count
//     };

// FizzBuzz
// function fizzbuzz(n){
//     let x = []
//     for (let i = 1; i <= n; i++){
//     if (i % 3 === 0 && i % 5 === 0){
//       x.push("FizzBuzz")}
//     else if (i % 3 === 0 && i % 5 !== 0){
//       x.push("Fizz")}
//     else if (i % 3 !== 0 && i % 5 === 0){
//       x.push("Buzz")}
//       else {x.push(i)}
//       }
//       return x
//   }

//Growth of a Population
// function nbYear(p0, percent, aug, p) {
//     let result = []
//   percent = percent / 100
//       for (let i= 0; p0 <= p-1; p0+=p0*percent+aug){
//        let years = p0 + p0 * percent +aug;
//         result.push(years)
//       }
//     return result.length
//   }

// find the calculation type
// function calcType(a, b, res) {
//     if (a + b === res){
//       return "addition"
//     }
//     if (a - b === res){
//       return "subtraction"
//     }
//     if (a * b === res){
//       return "multiplication"
//     }
//     if (a / b === res){
//       return "division"
//     }
//   }

// javascript array filter
// function getEvenNumbers(numbersArray){
//     return numbersArray.filter(number => number % 2 === 0)
//     }

// triple trouble
// function tripleTrouble(one, two, three){
//     one.split(' ')
//     two.split(' ')
//     three.split(' ')
//     let four = ''
//     for (let i = 0; i < one.length; i++){
//       four += one[i] + two[i] + three[i]
//     }
//     return four
//    }

