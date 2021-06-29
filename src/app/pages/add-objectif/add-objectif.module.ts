import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddObjectifPageRoutingModule } from './add-objectif-routing.module';

import { AddObjectifPage } from './add-objectif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddObjectifPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddObjectifPage]
})
export class AddObjectifPageModule {}
