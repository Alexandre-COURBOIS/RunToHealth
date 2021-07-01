import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateUserContactPage } from './update-user-contact.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateUserContactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateUserContactPageRoutingModule {}
