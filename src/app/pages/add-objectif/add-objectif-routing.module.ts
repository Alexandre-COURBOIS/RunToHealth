import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddObjectifPage } from './add-objectif.page';

const routes: Routes = [
  {
    path: '',
    component: AddObjectifPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddObjectifPageRoutingModule {}
