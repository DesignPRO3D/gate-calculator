import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarCalculationsPageRoutingModule } from './bar-calculations-routing.module';

import { BarCalculationsPage } from './bar-calculations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarCalculationsPageRoutingModule
  ],
  declarations: [BarCalculationsPage]
})
export class BarCalculationsPageModule {}
