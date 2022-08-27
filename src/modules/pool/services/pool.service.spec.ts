import { PoolService } from './pool.service';

describe('PoolService', () => {
  let poolService: PoolService;
  beforeEach(() => {
    poolService = new PoolService();

  });

  it('should set Champions', () => {
    let dataSet;
    poolService.dataToShare.subscribe( data => {
          dataSet = data;
    })
    poolService.setChampions();
    expect(dataSet).not.toBeNull();
  });

  it('should update data to share', () => {
    let dataSetBefore;
    let dataSetAfter;
    poolService.dataToShare.subscribe( data => {
        if (dataSetBefore === undefined) {
            dataSetBefore = data;
        } else {
            dataSetAfter = data;
        }
    });
    poolService.setChampions();
    poolService.updateDataToShare();
    expect(dataSetBefore).not.toEqual(dataSetAfter);
  });

  it('should select a champion', () => {
    const mockChampion = poolService.champions[0];
    poolService.setChampions();
    poolService.selectChampion(mockChampion);
    expect(poolService.teamSize).toBe(1);
    poolService.selectChampion(mockChampion);
    expect(poolService.teamSize).toBe(0);
  });

  it('should select a role', () => {
    const mockRole = poolService.champions[0].roles[0];
    poolService.setChampions();
    poolService.selectRole(mockRole);
    expect(poolService.teamSize).toBeGreaterThan(0);
    poolService.selectRole(mockRole);
    expect(poolService.teamSize).toBe(0);
  });

  it('should check role filter', () => {
    const mockRole = poolService.champions[0].roles[0];
    poolService.setChampions();
    poolService.selectRole(mockRole);
    expect(poolService.checkRoleFilter(mockRole)).toBe(true);
    poolService.selectRole(mockRole);
    expect(poolService.checkRoleFilter(mockRole)).toBe(false);
  });

  it('should sort champions', () => {
    poolService.setChampions();
    poolService.championSort('cost');
    expect(poolService.champions[0].cost).toBe(1);
  });
});