import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Champion } from 'src/models/champion';
import { Bonus } from 'src/models/bonus';
import { PoolService } from 'src/modules/pool/services/pool.service';

import * as _ from 'lodash';
import { Subscription } from 'rxjs';
import { DataToShare } from 'src/models/dataToShare';



@Component({
  selector: 'app-pool',
  templateUrl: './pool.component.html',
  styleUrls: ['./pool.component.scss']
})

export class PoolComponent implements OnInit, OnDestroy {
  formFilters: FormGroup;
  bonusesPool: Bonus[] = [];
  champions: Champion[] = [];
  noChampSelected = true;
  roles: string[] = [];
  rolesCount: number[] = [];
  rolesPool: string[] = [];
  teamSize = 0;
  subscription: Subscription;


  constructor(
    private fb: FormBuilder,
    private poolService: PoolService
  ) {
    this.subscription = this.poolService.setChampions().subscribe( (data: DataToShare) => {
      if (data) {
        const  {champions, roles, rolesPool, bonusesPool, noChampSelected, teamSize} = data;
        this.champions = champions;
        this.roles = roles;
        this.rolesPool = rolesPool;
        this.bonusesPool = bonusesPool;
        this.noChampSelected = noChampSelected;
        this.teamSize = teamSize;
      }
    })
  }

  ngOnInit(): void {
    this.formFilters = this.fb.group({
      teamSize: [this.teamSize]
    });
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  /**
   * Select or unselect champion
   * @param champion model
   */
   selectChampion(champion) {
    this.poolService.selectChampion(champion);
    this.formFilters.patchValue({
      teamSize: this.teamSize
    });
  }

  /**
   * Select role pool
   * @param role name of role
   */
  selectRole(role) {
    this.poolService.selectRole(role);
    this.formFilters.patchValue({
      teamSize: this.teamSize
    });
  }

  /**
   * Check role filter selected
   * @param role name
   */
  checkRoleFilter(role) {
    return this.poolService.checkRoleFilter(role);
  }

  /**
   * Reset composition
   */
  resetComposition() {
    this.poolService.resetComposition();
    this.formFilters.patchValue({
      teamSize: this.teamSize
    });
  }
}
