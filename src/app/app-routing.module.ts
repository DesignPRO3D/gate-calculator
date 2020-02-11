import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'gate-calculations',
    loadChildren: () => import('./gate-calculations/gate-calculations.module').then( m => m.GateCalculationsPageModule)
  },
  {
    path: 'bar-calculations',
    loadChildren: () => import('./bar-calculations/bar-calculations.module').then( m => m.BarCalculationsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
