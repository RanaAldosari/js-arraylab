let characters = [
    [
    "Luke Skywalker",
       177,
      "male",
      77,
    "brown",
    ],
    [
       "Leia Organa",
      160,
      "female",
       56,
       "blue",
    ],
    [
       "Han Solo",
      180,
      "male",
      80,
      "brown",
    ],
    [
       "Chewie",
      222,
      "male",
      190,
       "black",
    ],
    [
      "kevien",
      106,
       "male",
      32.2,
       "red",
    ],
  ];
// map
let names = characters.map(name => name[0]);
console.log(names)
let heights=characters.map(height=>height[1])
console.log(heights)
// reduce
let totalHeights=characters.reduce((sum,height)=>{
    return sum+height[1]
},0)
console.log(totalHeights)
// filter
let heights2=characters.filter(function(currentvalue){
    return currentvalue[1]<200
})
.map(function(currentvalue){
    return currentvalue[1]
})
console.log(heights2)
let male=characters.filter(char=>{
    return char[2]==="male"
})
console.log(male)
// sort
let sortMass=characters.sort((a,b)=>a[3]-b[3]);
console.log(sortMass)
let sortHeghit=characters.sort((a,b)=>a[1]-b[1])
console.log(sortHeghit)
// every
let everyMass=characters.every(char=>char[3]>40);
console.log(everyMass)

let everyHeights=characters.every(char=>char[1]<200)
console.log(everyHeights)
// some
let someeyes=characters.some(eyes=>eyes[4]==="blue")
console.log(someeyes)

let taller = characters.some(tall => tall[1] > 210);
console.log(taller)




