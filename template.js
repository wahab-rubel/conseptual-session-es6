const name = 'wahab rubel';
const age = 30;
const job = 'bekar';

// amar name wahab rubel

// const sentence1 = 'amar name' +name + 'amar age'+ age + ' Job' + job ;
// const sentence = `
// amar name ${name}. amar age ${age}. job ${job};
// `
// console.log(sentence1);
// console.log(sentence);


const myInfo = {
  name: "wahab rubel",
  age: 30,
  address: "ctg",
  education: 'bba',
  subject: ['bangal', 'english', 'math']
}

const sentence1 = `amar name ${name}. amar age ${age}. ${ myInfo.subject.
map((sub) => sub)}`
console.log(sentence1)