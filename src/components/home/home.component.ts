import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Champion } from 'src/models/champion';
import { Bonus } from 'src/models/bonus';
import { PoolService } from 'src/shared/pool.service';

import { DomSanitizer } from '@angular/platform-browser';
import * as _ from 'lodash';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {
  formFilters;
  bonusesPool: Bonus[] = [];
  champions: Champion[] = [];
  noChampSelected = true;
  roles: [] = [];
  rolesCount: [] = [];
  rolesPool: [] = [];
  teamSize = 0;
  subscription: Subscription;


  constructor(
    private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private poolService: PoolService
  ) {
    this.subscription = this.poolService.setChampions().subscribe( data => {
      if (data) {
        const  {champions, roles, rolesPool, bonusesPool, noChampSelected, teamSize } = data;
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
  }
}
