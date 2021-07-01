import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DejeunerModalPage } from './dejeuner-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DejeunerModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DejeunerModalPageRoutingModule {}
