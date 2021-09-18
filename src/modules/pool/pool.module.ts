import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoolRoutingModule } from './pool-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { PoolService } from 'src/modules/pool/services/pool.service';

import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PoolRoutingModule,
    ReactiveFormsModule
  ],
  providers: [PoolService]
})

export class PoolModule { }
