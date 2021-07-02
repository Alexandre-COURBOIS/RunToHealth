import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateUserContactPageRoutingModule } from './update-user-contact-routing.module';

import { UpdateUserContactPage } from './update-user-contact.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UpdateUserContactPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [UpdateUserContactPage]
})
export class UpdateUserContactPageModule {}
