const input = require("fs").readFileSync("./input").toString('utf-8').split("\n")

const supplies = input.slice(0,8).reduce((stacks, row) => {
  for (let i = 0; i < 9; i++){
    const crate = row[i*4+1].replace(' ', '')
    stacks[i] += crate
 }
  return stacks
}, Array.from({length:9}).fill(''))

const procedure = input.slice(10).map(procedure => 
  procedure
    .match(/\d+/g)
    .map(digit => parseInt(digit))
)

procedure.forEach((step) => {
  let [n, f, t] = step
  const [from, to] = [f,t].map(i => supplies[i - 1])
  supplies[t - 1] = from.substr(0, n) + to
  supplies[f - 1] = from.substr(n)
})

const topCrates = supplies.map(stack => stack[0]).join('')

console.log(topCrates)