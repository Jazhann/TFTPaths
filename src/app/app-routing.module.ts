import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../modules/pool/pool.module').then(m => m.PoolModule)
  },
  {
    path: '**',
    loadChildren: () => import('../modules/pool/pool.module').then(m => m.PoolModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
