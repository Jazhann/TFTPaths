import { Champion } from './champion';

describe('Champion', () => {
  let champion: Champion;
  beforeEach(() => {
    champion = new Champion('John Doe', 'johndoe', ['knight'], 3, false, false, false);
  });

  it('should create a bonus', () => {
    const mockChampion = {
        name: 'John Doe',
        img: 'johndoe',
        roles: ['knight'],
        cost: 3,
        isSelected: false,
        sinergy: false,
        sinergy2: false
    }
    expect(champion).toEqual(mockChampion);
  });
});