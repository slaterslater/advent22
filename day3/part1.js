const rucksacks = require("fs").readFileSync("./input").toString('utf-8').split("\n")

const split = (str, i) => [str.slice(0, i), str.slice(i)]

const sumPriorities = rucksacks.reduce((sum, rucksack) => {
  const numItems = rucksack.length/2
  const [comp1, comp2] = split(rucksack, numItems)
  const i = [...Array(numItems).keys()].find(index => comp2.includes(comp1[index]))
  const charCode = comp1.charCodeAt(i)
  const offset = charCode > 90 ? 96 : 38
  priority = charCode - offset
  return sum + priority
} ,0)

console.log(sumPriorities)