import { NgModule } from '@angular/core';

import { PoolRoutingModule } from './pool-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PoolService } from 'src/modules/pool/services/pool.service';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';

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
