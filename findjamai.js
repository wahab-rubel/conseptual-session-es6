const polapain = [
  { name: 'wahab rube', job: 'sorkari', salary: 17000 },
  { name: 'Babul', job: 'Besorkari', salary: 7000 },
  { name: 'Kabul', job: 'sorkari', salary: 38000 },
  { name: 'Sabul', job: 'Besorkari', salary: 34000 },
  { name: 'Rafuqul', job: 'sorkari', salary: 40000 },
  { name: 'Habul', job: 'Besorkari', salary: 34000 },
  { name: 'Shafuqul', job: 'sorkari', salary: 50000 },
  { name: 'Islampur', job: 'company', salary: 21000 },
  { name: 'Raju', job: 'besorkari', salary: 23000 },
]
// sorkari >= 20000 or besorkari >= 40

const jamais = polapain.filter(
  (pola) => 
  (pola.job === 'sorkari' && pola.salary >= 20000) ||
  (pola.job === 'besorkari' && pola.salary >= 50000)

);
const lottery = Math.floor(Math.random()*jamais.length);
console.log(lottery);
console.log(jamais[lottery].name, 'tumi jitcho');