const data = require("fs").readFileSync("./data").toString('utf-8')

const elves = data.split("\n\n")

const mostCalories = elves.reduce((max, elf) => {
  const calories = elf.split("\n").reduce((total, food) => 
    total += Number(food) 
  ,0)

  if (calories > max) max = calories
  return max
} , 0)

console.log(mostCalories)
