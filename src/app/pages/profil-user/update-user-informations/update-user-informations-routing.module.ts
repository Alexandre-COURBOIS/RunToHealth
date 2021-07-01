import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateUserInformationsPage } from './update-user-informations.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateUserInformationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateUserInformationsPageRoutingModule {}
