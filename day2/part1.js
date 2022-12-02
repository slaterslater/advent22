const strategy = require("fs").readFileSync("./input").toString('utf-8').split("\n")
// const strategy = ['A Y', 'B X', 'C Z']

/*

  A B C
X 3 0 6
Y 6 3 0
Z 0 6 3

*/

const shapes = [
  ['A','B','C'],
  ['X','Y','Z'],
]

const outcomes = [
  [3, 0, 6],
  [6, 3, 0],
  [0, 6, 3],
]

const totalScore = strategy.reduce((total, round) => {
  const [theirs, myPick] = round.split(' ')
    .map((choice, i) => 
      shapes[i].indexOf(choice)
    )
  const score = outcomes[myPick][theirs] + myPick + 1
  return total + score  
  }
, 0)

console.log(totalScore)