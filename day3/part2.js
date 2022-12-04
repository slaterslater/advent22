const elves = require("fs").readFileSync("./input").toString('utf-8').split("\n")
const groups = Array.from({length: elves.length / 3}, () => elves.splice(0,3));

const sumPriorities = groups.reduce((sum, rucksacks) => {
  const [sack1, sack2, sack3] = rucksacks
  const i = [...Array(sack1.length).keys()]
    .find(index => 
      sack2.includes(sack1[index]) && sack3.includes(sack1[index])
    )
  const charCode = sack1.charCodeAt(i)
  const offset = charCode > 90 ? 96 : 38
  priority = charCode - offset
  return sum + priority
} ,0)

console.log(sumPriorities)