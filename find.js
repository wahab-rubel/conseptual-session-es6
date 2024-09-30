const numbers = [12, 13, 14, 15, 25, 30, 35, 14, 52, 30, 35, 41, 28, 30, 35];

let find = null;

// for( let item of numbers ){
//   if(item> 30){
//     find = item;
//     break;
//   }
// }
// console.log(find);

const result = numbers.find((item) => item > 30 && item % 2 == 0);
console.log(result);