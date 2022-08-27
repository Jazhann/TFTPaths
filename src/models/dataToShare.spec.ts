import { Bonus } from './bonus';
import { Champion } from './champion';
import { DataToShare } from './dataToShare';

describe('DataToShare', () => {
  let dataToShare: DataToShare;
  const champion = new Champion('John Doe', 'johndoe', ['knight'], 3, false, false, false);
  const bonus = new Bonus('bonus example', 'knight', 1, 6);
  beforeEach(() => {
    dataToShare = new DataToShare([champion], ['knight'], [3, 6], ['knight'], [bonus], true, 1);
  });

  it('should create a bonus', () => {
    const mockDataToShare = {
        champions: [champion],
        roles: ['knight'],
        rolesCount: [3, 6],
        rolesPool: ['knight'],
        bonusesPool: [bonus],
        noChampSelected: true,
        teamSize: 1
    }
    expect(dataToShare).toEqual(mockDataToShare);
  });
});