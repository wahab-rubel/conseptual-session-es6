// const arr = [10,20,30,40,50,60];
// for(let item of arr){
//   console.log(item);
// }

// forEach, map
// const a = () =>

  // arr.forEach((item) => item)


  // function show(a){
  //   console.log(a);
  // }
  const arr = [10,20,30,40,50,60];
  // const show = (a) => {
  //   console.log(a);
  // }
  // arr.forEach(show);

  // const result = arr.forEach((a) => a);
  // let sum = 0;
  // arr.forEach((item) =>{
  //   sum += item
  // })
  // console.log(sum);

   // callback parameter (item, index, whole array)
  arr.forEach((item, index,a) =>{
    console.log('item:', item, 'index:', index,a);
  })