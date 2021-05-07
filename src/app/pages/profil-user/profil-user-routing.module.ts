import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilUserPage } from './profil-user.page';

const routes: Routes = [
  {
    path: 'profil',
    component: ProfilUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilUserPageRoutingModule {}
