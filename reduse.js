// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let item of numbers){
//   sum += item
// }
// console.log(sum);

// let multi = 1;

// for(let item of numbers){
//   multi *= item;
// }
// console.log(multi);

// reduce(function

const numbers = [1, 2, 3, 4, 5];

// arr.reduce((previous, current ) => previous + current, initial values);

const sum = numbers.reduce((pre, current) => pre + current, 1);
console.log(sum);

const number = [{a:1},{a:2},{a:3},{a:4},{a:5},]
const total = numbers.reduce((previous, current) => previous + current, 1);
console.log(total);
