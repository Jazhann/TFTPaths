import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';


const routes: Routes = [
  { path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../pool/pool.module').then(m => m.PoolModule)
      }
    ]
  },
  { path: '**', component: LayoutComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
