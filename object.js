// const myInfo= {
//   name: 'wahab rubel',
//   age: 36,
//   address: 'rangpur',
//   sosurName: 'Katappa',
//   sosurBari: 'chittaogong',
//   contact: {
//     phone: 98381,
//     email: 'wahabmd@gmail.com',
//     age: 40,
//   },
// };

// const obj2 = {...myInfo};
// obj2.married = false;
// obj2.age = 31;

// console.log(myInfo);
// console.log(obj2);


// const myName = myInfo.name;
// const myAge = myInfo.age;

// const {age:myAge} = myInfo;
// console.log(myAge);

// const {contact:{email}} = myInfo;
// const {contact:{age}} = myInfo;

// console.log(contact);
// const {email} = contact;
// console.log(email);
// console.log(age);


const myInfo= {
    name: 'wahab rubel',
    age: 36,
    address: 'rangpur',
    sosurName: 'Katappa',
    sosurBari: 'chittaogong',
    // contact: {
    //   phone: 98381,
    //   email: 'wahabmd@gmail.com',
    //   age: 40,
    // },
  };

  for (let key in myInfo){
    console.log(myInfo[key]);
  }

  // object access: dot notation, bracket notation


  // const x = 'name';
  // const y = 'sosurName';

  // console.log(myInfo[y]);