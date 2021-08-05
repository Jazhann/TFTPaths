import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'src/modules/pool/components/layout/layout.component';


const routes: Routes = [
  { path: '', component: LayoutComponent, pathMatch: 'full' },
  { path: '**', component: LayoutComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoolRoutingModule { }
