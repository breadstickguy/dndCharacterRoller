
const dice = {
    const demo = "This is a demo change";
    roll: (sides = 20) => Math.floor(Math.random() * sides + 1),
    rollMulti: (numDice = 1, sides) => {
        const rolls = [];
        for(let i = 0; i < numDice; i++) {
            rolls.push(dice.roll(sides));
        }
        return rolls;
    }

}

module.exports = dice;