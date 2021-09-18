import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoolRoutingModule } from './pool-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { PoolService } from 'src/modules/pool/services/pool.service';

import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';

import { removeSetPipe } from 'src/pipes/removeSet.pipe';

@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    removeSetPipe
  ],
  imports: [
    CommonModule,
    PoolRoutingModule,
    ReactiveFormsModule
  ],
  providers: [PoolService]
})

export class PoolModule { }
