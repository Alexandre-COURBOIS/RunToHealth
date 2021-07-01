import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilUserPage } from './profil-user.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilUserPage
  },  {
    path: 'update-user-contact',
    loadChildren: () => import('../../Pages/profil-user/update-user-contact/update-user-contact.module').then( m => m.UpdateUserContactPageModule)
  },
  {
    path: 'update-user-informations',
    loadChildren: () => import('../../Pages/profil-user/update-user-informations/update-user-informations.module').then( m => m.UpdateUserInformationsPageModule)
  },
  {
    path: 'update-user-password',
    loadChildren: () => import('../../Pages/profil-user/update-user-password/update-user-password.module').then( m => m.UpdateUserPasswordPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilUserPageRoutingModule {}
