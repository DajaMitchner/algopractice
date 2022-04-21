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