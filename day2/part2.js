const strategy = require("fs").readFileSync("./input").toString('utf-8').split("\n")
// const strategy = ['A Y', 'B X', 'C Z']

/*

  A B C
X 2 0 1
Y 0 1 2
Z 1 2 0

*/

const shapes = [
  ['A','B','C'],
  ['X','Y','Z'],
]

const outcomes = [
  [2, 0, 1],
  [0, 1, 2],
  [1, 2, 0],
]

const totalScore = strategy.reduce((total, round) => {
  const [theirs, result] = round.split(' ')
    .map((choice, i) => 
      shapes[i].indexOf(choice)
    )
  const myPick = outcomes[result][theirs]
  const score = 3 * result + myPick + 1

  return total + score  
  }
, 0)

console.log(totalScore)