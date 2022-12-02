const data = require("fs").readFileSync("./data").toString('utf-8')

const elves = data.split("\n\n").map(elf => 
  elf.split("\n").reduce((total, food) => total += Number(food) ,0)  
)

elves.sort((a,b) => b-a)

const top3 = elves[0] + elves[1] + elves[2]

console.log(top3)