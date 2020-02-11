import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GateCalculationsPage } from './gate-calculations.page';

const routes: Routes = [
  {
    path: '',
    component: GateCalculationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GateCalculationsPageRoutingModule {}
