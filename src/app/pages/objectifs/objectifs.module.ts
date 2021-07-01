import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjectifsPageRoutingModule } from './objectifs-routing.module';

import { ObjectifsPage } from './objectifs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjectifsPageRoutingModule
  ],
  declarations: [ObjectifsPage]
})
export class ObjectifsPageModule {}
