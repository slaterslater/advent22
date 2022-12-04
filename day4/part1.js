const pairs = require("fs").readFileSync("./input").toString('utf-8').split("\n")

const contained = pairs.reduce((count, pair) => {
  const [a1,a2,b1,b2] = pair.split(/[-,]/g).map(id => Number(id))
  if ((a1 >= b1 && a2 <= b2) || (b1 >= a1 && b2 <= a2)) count += 1
  return count
} ,0)

console.log(contained)