import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateObjectifPageRoutingModule } from './update-objectif-routing.module';

import { UpdateObjectifPage } from './update-objectif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateObjectifPageRoutingModule
  ],
  declarations: [UpdateObjectifPage]
})
export class UpdateObjectifPageModule {}
