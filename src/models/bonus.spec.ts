import { Bonus } from './bonus';

describe('Bonus', () => {
  let bonus: Bonus;
  beforeEach(() => {
    bonus = new Bonus('bonus example', 'knight', 1, 6);
  });

  it('should create a bonus', () => {
    const mockBonus = {
        description: 'bonus example',
        role: 'knight',
        units: 1,
        maxUnits: 6
    }
    expect(bonus).toEqual(mockBonus);
  });
});