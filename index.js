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

