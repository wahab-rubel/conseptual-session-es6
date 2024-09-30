const people = [
  {
    id: 1,
    name: 'John',
    occupation: 'software Engineer',
    contact: {
      email: 'john@example.com',
    },
    address: {
      street: 'John Street',
      city: 'San Francisco',
      state: 'CA',
      zip: '125153',
    },
    social:{
      twitter: "@twitter"
    },
    hobbies: ['codding', 'Hiking', 'web developer']
  },
  {
    id: 2,
    name: 'John Smith',
    age: 40,
    occupation: 'software Engineer',
    contact: {
      email: 'john@example.com',
      phone: '123-456-25412',
    },
    hobbies: ['codding']
  },
  {
    id: 3,
    name: 'John Smith',
    age: 31,
    occupation: 'software Engineer',
    contact: {
      email: 'john@example.com',
      phone: '123-456-25412',
    },
    address: {
      street: 'John Street',
      city: 'San Francisco',
      state: 'CA',
      zip: '125153',
    },
  hobbies: ['codding']
  }
];

// people.map((person) => {
//   const sentence = `'parson is' ${person.name}. city: ${person.address?.city || 'N/A'}`
//   console.log(sentence);
// })

const x = people.find((p) => p.age == 40);
console.log(x.name);