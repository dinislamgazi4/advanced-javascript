const students = [
    {id: 21, name: 'hossain'},
    {id: 31, name: 'hossain'},
    {id: 41, name: 'hossain'},
    {id: 71, name: 'hossain'},
]
const names = students.map( s => s.name)
const ids = students.map(s => s.id);
const bigger = students.filter( s => s.id>40);
const bigger2 = students.find( s => s.id>40)
console.log(bigger2)