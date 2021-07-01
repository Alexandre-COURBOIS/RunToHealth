import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DejeunerModalPageRoutingModule } from './dejeuner-modal-routing.module';

import { DejeunerModalPage } from './dejeuner-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DejeunerModalPageRoutingModule
  ],
  declarations: [DejeunerModalPage]
})
export class DejeunerModalPageModule {}
