const pairs = require("fs").readFileSync("./input").toString('utf-8').split("\n")

const overlaps = pairs.reduce((count, pair) => {
  const [a1,a2,b1,b2] = pair.split(/[-,]/g).map(id => Number(id))
  if (a2 < b1 || b2 < a1) return count
  return count +=1
} ,0)

console.log(overlaps)