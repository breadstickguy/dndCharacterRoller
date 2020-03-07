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
	describe('multiRoll', () => {
		it('should return an array', () => {
			const rollMulti = dice.rollMulti();
			expect(Array.isArray(rollMulti)).toBeTruthy();
		});
		it('should only run once if no params', () => {
			const rollMulti = dice.rollMulti();
			expect(rollMulti.length).toEqual(1);
		});
		it('should roll the proper type of die', () => {
			const rollMulti = dice.rollMulti(2, 12);
			expect(rollMulti.length).toEqual(2);
			expect(rollMulti[0]).toBeGreaterThanOrEqual(1);
			expect(rollMulti[0]).toBeLessThanOrEqual(12);
			expect(rollMulti[1]).toBeGreaterThanOrEqual(1);
			expect(rollMulti[1]).toBeLessThanOrEqual(12);
		});
		it('should roll the proper number of dice', () => {
			const rollMulti = dice.rollMulti(4);
			const rollMultiSix = dice.rollMulti(6);
			const rollMultiTen = dice.rollMulti(10);
			expect(rollMulti.length).toEqual(4);
			expect(rollMultiSix.length).toEqual(6);
			expect(rollMultiTen.length).toEqual(10);
		});
	});
});