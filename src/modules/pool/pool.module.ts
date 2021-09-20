import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoolRoutingModule } from './pool-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { PoolService } from 'src/modules/pool/services/pool.service';

import { PoolComponent } from './components/pool/pool.component';

@NgModule({
  declarations: [
    PoolComponent
  ],
  imports: [
    CommonModule,
    PoolRoutingModule,
    ReactiveFormsModule
  ],
  providers: [PoolService]
})

export class PoolModule { }
