import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateUserInformationsPageRoutingModule } from './update-user-informations-routing.module';

import { UpdateUserInformationsPage } from './update-user-informations.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UpdateUserInformationsPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [UpdateUserInformationsPage]
})
export class UpdateUserInformationsPageModule {}
