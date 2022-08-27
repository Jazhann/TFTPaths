import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoolRoutingModule } from './pool-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { PoolService } from '@modules/pool/services/pool.service';

import { PoolComponent } from './components/pool/pool.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    PoolComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    PoolRoutingModule,
    ReactiveFormsModule
  ],
  providers: [PoolService]
})

export class PoolModule { }
