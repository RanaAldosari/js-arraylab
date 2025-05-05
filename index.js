let students=["Omar","Ali","Sara","Ahmed","Lana","Noor"]
students.forEach(name=>{
if(name.startsWith("A")||name.startsWith("a")){
    console.log(name)
    }
})

let count=students.filter(name=>name.length>4)
console.log(count)

console.log(students.includes("Omar"))

let sortName=students.sort()
console.log(sortName)

let uppercase=students.map(name=>name.toUpperCase())
console.log(uppercase)

let i=students.find(name=>name.toLocaleLowerCase().includes("r"))
console.log(i)

let revrseName = students.map(name => name.split('').reverse().join(''));
console.log(revrseName)

let deleteName=students.filter(name=>!name.includes("o")&&!name.includes("O"))
console.log(deleteName)

let titalChar=students.reduce((currentele,name)=>currentele+name.length,0)
console.log(titalChar)

let evenNames=students.filter(name=>name.length%2===0)
console.log(evenNames)


let stdGrades=[["Ali", [85, 90, 78]],
["Sara", [89, 60, 89]],
["Ahmed", [7, 0, 5]],
["Lana", [98, 79, 99]],
["Omar", [5, 65, 60]],
["Noor", [80, 73, 78]]
]

let stdGradesavrage = stdGrades.map(student => {
let name = student[0];
let grades = student[1];
let average = grades.reduce((acc, grade) => acc + grade, 0) / grades.length;
return { name, average };
});

let stdMore80 = stdGradesavrage.filter(student => student.average > 80);
console.log(stdMore80)

