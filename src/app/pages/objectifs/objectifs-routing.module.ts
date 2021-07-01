import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObjectifsPage } from './objectifs.page';

const routes: Routes = [
  {
    path: '',
    component: ObjectifsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjectifsPageRoutingModule {}
