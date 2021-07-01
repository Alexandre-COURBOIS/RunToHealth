import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetitdejeunerModalPageRoutingModule } from './petitdejeuner-modal-routing.module';

import { PetitdejeunerModalPage } from './petitdejeuner-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetitdejeunerModalPageRoutingModule
  ],
  declarations: [PetitdejeunerModalPage]
})
export class PetitdejeunerModalPageModule {}
