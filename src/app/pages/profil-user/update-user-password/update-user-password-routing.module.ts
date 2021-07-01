import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateUserPasswordPage } from './update-user-password.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateUserPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateUserPasswordPageRoutingModule {}
