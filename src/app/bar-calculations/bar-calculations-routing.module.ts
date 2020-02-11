import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarCalculationsPage } from './bar-calculations.page';

const routes: Routes = [
  {
    path: '',
    component: BarCalculationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarCalculationsPageRoutingModule {}
