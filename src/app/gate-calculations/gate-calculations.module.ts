import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GateCalculationsPageRoutingModule } from './gate-calculations-routing.module';

import { GateCalculationsPage } from './gate-calculations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GateCalculationsPageRoutingModule
  ],
  declarations: [GateCalculationsPage]
})
export class GateCalculationsPageModule {}
