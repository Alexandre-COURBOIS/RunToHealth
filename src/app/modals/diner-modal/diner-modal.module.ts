import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DinerModalPageRoutingModule } from './diner-modal-routing.module';

import { DinerModalPage } from './diner-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DinerModalPageRoutingModule
  ],
  declarations: [DinerModalPage]
})
export class DinerModalPageModule {}
