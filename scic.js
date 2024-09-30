const students = [
  { name: 'wahab rube', email: 'wahabrube@gmail.com', avg:58, fiftyPercent: true },
  { name: 'wahab', email: 'wahabrube@gmail.com', avg:56, fiftyPercent: true },
  { name: 'rakib job', email: 'wahabrube@gmail.com', avg:50, fiftyPercent: true },
  { name: 'shfique hd', email: 'wahabrube@gmail.com', avg:53, fiftyPercent: true },
  { name: 'imail hossain', email: 'wahabrube@gmail.com', avg:52, fiftyPercent: true },
  { name: 'nokib', email: 'wahabrube@gmail.com', avg:55, fiftyPercent: true },
  { name: 'rofiqe', email: 'wahabrube@gmail.com', avg:28, fiftyPercent: true },
  { name: 'Jobbar hossain', email: 'wahabrube@gmail.com', avg:32, fiftyPercent: true },
  { name: 'sattar ali', email: 'wahabrube@gmail.com', avg:25, fiftyPercent: true },
  { name: 'Rakubul islam', email: 'wahabrube@gmail.com', avg:37, fiftyPercent: true },
]

// const findSAIC = (students) => {
//   const scic = students.filter((student) => student.avg >= 48 && student.fiftyPercent === true
// );
// const names = scic.map((p) => p.name);
// return names;
// }

const findSAIC = (students) => students.filter((person) => person.avg >= 48 && person.fiftyPercent).map((p) => p.name);
const result = findSAIC(students);
console.log(result);
