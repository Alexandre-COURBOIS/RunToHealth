import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateUserPasswordPageRoutingModule } from './update-user-password-routing.module';

import { UpdateUserPasswordPage } from './update-user-password.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UpdateUserPasswordPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [UpdateUserPasswordPage]
})
export class UpdateUserPasswordPageModule {}
