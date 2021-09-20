import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Constants } from 'src/shared/constants';
import { Bonus } from 'src/models/bonus';
import { Champion } from 'src/models/champion';
import { DataToShare } from 'src/models/dataToShare';

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class PoolService {
  bonuses: Bonus[] = [...Constants.bonuses];
  bonusesPool: Bonus[] = [];
  champions: Champion[] = [...Constants.Champions];
  championsPool: Champion[] = [];
  noChampSelected = true;
  roles: string[]= [...Constants.roles];
  rolesCount: number[]= [];
  rolesPool: string[] = [];
  selectedRole = '';
  teamSize = 0;
  dataToShare = new BehaviorSubject<DataToShare>(null);

  constructor() { }

  /**
   * Set Champion pool and return data
   * @returns Observable
   */
  setChampions(): Observable<DataToShare> {
    this.roles.forEach(role => {
      this.rolesCount[role] = 0;
    });
    this.championSort(Constants.championName);
    this.updateDataToShare();
    return this.dataToShare.asObservable();
  }

  updateDataToShare(): void {
    this.dataToShare.next({
      champions: this.champions,
      roles: this.roles,
      rolesCount: this.rolesCount,
      rolesPool: this.rolesPool,
      bonusesPool: this.bonusesPool,
      noChampSelected: this.noChampSelected,
      teamSize: this.teamSize
    });
  }

  /**
   * Select or unselect champion
   * @param champion model
   */
  selectChampion(champion) {
    const champIndex = this.champions.findIndex((champ => champ.name === champion.name));
    if (!this.champions[champIndex].isSelected) {
      this.champions[champIndex].isSelected = true;
      this.championsPool.push(champion);
      champion.roles.forEach(role => {
        this.rolesCount[role]++;
      });
      this.teamSize++;
      this.noChampSelected = false;
    } else {
      this.champions[champIndex].isSelected = false;
      this.championsPool = _.remove(this.championsPool, champ => {
        return champ.name !== champion.name;
      });
      champion.roles.forEach(role => {
        this.rolesCount[role]--;
      });
      this.teamSize--;
      if (this.teamSize === 0) {
        this.noChampSelected = true;
      }
    }
    this.getBonus();
    this.updatePool();
    this.updateSinergies();
    this.updateDataToShare();
  }


  /**
   * Sort champion by param
   * @param param use to sort
   */
  championSort(param) {
    this.champions.sort((a, b) => {
      if (a[param] > b[param]) {
        return 1;
      }
      if (a[param] < b[param]) {
        return -1;
      }
      return 0;
    });
  }

  /**
   * Select role pool
   * @param role name of role
   */
  selectRole(role): void {
    if (role !== this.selectedRole) {
      this.resetComposition();
      this.selectedRole = role;
      let countChampions = 0;
      this.champions.map(champion => {
        if (_.indexOf(champion.roles, role) !== -1) {
          champion.isSelected = true;
          countChampions++;
          this.championsPool.push(champion);
          champion.roles.forEach(rol => {
            this.rolesCount[rol]++;
          });
        }
        return champion;
      });
      this.updatePool();
      this.updateSinergies();
      this.teamSize = countChampions;
      this.getBonus();
      this.noChampSelected = false;
    } else {
      this.resetComposition();
    }
    this.updateDataToShare();
  }

  /**
   * Get champions bonuses
   */
  getBonus() {
    this.bonusesPool = [];
    this.bonuses.forEach(bonus => {
      if (bonus.role === 'ninja') {
        if (this.rolesCount[bonus.role] === bonus.units) {
          this.bonusesPool[bonus.role] = bonus;
        }
      } else if (bonus.units <= this.rolesCount[bonus.role]) {
        this.bonusesPool[bonus.role] = bonus;
      }
    });
  }

  /**
   * Update role pool
   */
  updatePool() {
    let pool = [];
    this.championsPool.forEach(champion => {
      pool = _.union(this.rolesPool, champion.roles);
    });
    this.rolesPool = pool;
  }

  /**
   * Update sinergies
   */
  updateSinergies() {
    this.champions.map(champion => {
      champion.sinergy2 = false;
      return champion.sinergy = false;
    });
    this.champions.map(champion => {
      let countRoles = 0;
      this.rolesPool.forEach(role => {
        if (_.indexOf(champion.roles, role) !== -1) {
          countRoles++;
        }
      });
      switch (countRoles) {
        case 1:
          return champion.sinergy = true;
        case 2:
          return champion.sinergy2 = true;
      }
    });

  }

  /**
   * Check role filter selected
   * @param role name
   */
  checkRoleFilter(role) {
    if (this.selectedRole === role) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Reset composition
   */
  resetComposition() {
    this.rolesCount = [];
    this.rolesPool = [];
    this.championsPool = [];
    this.noChampSelected = true;
    this.selectedRole = '';
    this.teamSize = 0;
    this.champions.map(champion => {
      champion.sinergy = false;
      champion.sinergy2 = false;
      champion.isSelected = false;
      return champion;
    });
    this.setChampions();
    this.updateDataToShare();
  }

}