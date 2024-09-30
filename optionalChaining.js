const petOWner = {
  name: 'wahab rubel',
  contact: {
    phone: 123524,
    email: 'wahbrubel@gmail.com',

  },
  pet: {
    name:'lotify',
    info: {
      color: 'black',
      weight: '1.5kg',
    },
  },
};

console.log(petOWner?.contact?.email);
// console.log(petOWner.contact?.email)
console.log(petOWner.address?.houseNo);