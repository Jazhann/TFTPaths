import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoolComponent } from './components/pool/pool.component';


const routes: Routes = [
  { path: '', component: PoolComponent, pathMatch: 'full' },
  { path: '**', component: PoolComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoolRoutingModule { }
