const dice = require('../../util/dice');

describe('Dice module', () => {
	describe('roll', () => {
		it('should successfully roll a random number between 1-20', () => {
			const roll = dice.roll();
			expect(roll).toBeGreaterThanOrEqual(1);
			expect(roll).toBeLessThanOrEqual(20);
		});
		it('should roll only the number of sides that are passed in', () => {
			const rollSix = dice.roll(6);
			expect(rollSix).toBeGreaterThanOrEqual(1);
			expect(rollSix).toBeLessThanOrEqual(6);

			const rollFour = dice.roll(4);
			expect(rollFour).toBeGreaterThanOrEqual(1);
			expect(rollFour).toBeLessThanOrEqual(4);
		});
	});
});