import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilUserPageRoutingModule } from './profil-user-routing.module';

import { ProfilUserPage } from './profil-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilUserPageRoutingModule
  ],
  declarations: [ProfilUserPage]
})
export class ProfilUserPageModule {}
