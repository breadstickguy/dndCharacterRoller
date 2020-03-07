
const dice = {
    roll: (sides = 20) => Math.floor(Math.random() * sides + 1)
}

module.exports = dice;