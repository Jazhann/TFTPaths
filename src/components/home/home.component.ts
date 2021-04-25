import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Champion } from 'src/models/champion';
import { Bonus } from 'src/models/bonus';
import { Constants } from 'src/common/constants';
import { DomSanitizer } from '@angular/platform-browser';
import * as _ from 'lodash';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  teamSize = 0;
  champions: Champion[] = [...Constants.Champions];
  roles = [...Constants.roles];
  formFilters;
  championsPool: Champion[] = [];
  rolesPool = [];
  rolesCount = [];
  bonuses: Bonus [] = [...Constants.bonuses];
  bonusesPool: Bonus [] = [];
  noChampSelected = true;
  selectedRole = '';

  constructor(
    private fb: FormBuilder,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.roles.forEach(role => {
      this.rolesCount[role] = 0;
    });
    this.formFilters = this.fb.group({
      teamSize: [this.teamSize]
    });
    this.championSort(Constants.championName);
  }

  /**
   * Get champion image
   * @param name Champion name
   */
  getImage(name) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${'../../assets/images/' + name + '.png'})`);
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
        champion.roles.forEach( role => {
          this.rolesCount[role]++;
        });
        this.formFilters.patchValue({
          teamSize: ++this.teamSize
        });
        this.noChampSelected = false;
    } else {
        this.champions[champIndex].isSelected = false;
        this.championsPool = _.remove(this.championsPool, champ => {
          return champ.name !== champion.name;
        });
        champion.roles.forEach(role => {
          this.rolesCount[role]--;
        });
        this.formFilters.patchValue({
          teamSize: --this.teamSize
        });
        if ( this.teamSize === 0 ) {
          this.noChampSelected = true;
        }
    }
    this.getBonus();
    this.updatePool();
    this.updateSinergies();
  }

  /**
   * Sort champion by param
   * @param param use to sort
   */
  championSort(param) {
    this.champions.sort( (a, b) => {
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
  selectRole(role) {
    if (role !== this.selectedRole) {
      this.resetComposition();
      this.selectedRole = role;
      let countChampions = 0;
      this.champions.map( champion => {
        if (_.indexOf(champion.roles, role) !== -1) {
          champion.isSelected = true;
          countChampions++;
          this.championsPool.push(champion);
          champion.roles.forEach( rol => {
            this.rolesCount[rol]++;
          });
        }
        return champion;
      });
      this.updatePool();
      this.updateSinergies();
      this.teamSize = countChampions;
      this.formFilters.patchValue({
        teamSize: this.teamSize
      });
      this.getBonus();
      this.noChampSelected = false;
    } else {
      this.resetComposition();
    }
  }

  /**
   * Get champions bonuses
   */
  getBonus() {
    this.bonusesPool = [];
    this.bonuses.forEach( bonus => {
      if (bonus.role === 'ninja' ) {
        if ( this.rolesCount[bonus.role] === bonus.units) {
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
    this.rolesPool = [];
    this.championsPool.forEach( champion => {
      this.rolesPool = _.union(this.rolesPool, champion.roles);
    });
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
        this.rolesPool.forEach( role => {
          if (_.indexOf(champion.roles, role) !== -1 ) {
            countRoles++;
          }
        });
        switch (countRoles) {
          case 1:
              return champion.sinergy = true;
              break;
          case 2:
              return champion.sinergy2 = true;
              break;
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
    this.ngOnInit();
  }
}
