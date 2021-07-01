import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import {AuthGuardService} from "../../services/auth-guard.service";

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'register',
        loadChildren: () => import('../register/register.module').then( m => m.RegisterPageModule)
      },
      {
        path: 'login',
        canActivate: [AuthGuardService],
        loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'active-account/:token',
        loadChildren: () => import('../activate-account/activate-account.module').then( m => m.ActivateAccountPageModule)
      },
      {
        path: 'forgot-password',
        loadChildren: () => import('../forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
      },
      {
        path: 'reset-password/:token',
        loadChildren: () => import('../reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
      },
      {
        path: '404NotFound',
        loadChildren: () => import('../not-found404/not-found404.module').then( m => m.NotFound404PageModule)
      },
      {
        path: 'profil-user',
        loadChildren: () => import('../profil-user/profil-user.module').then( m => m.ProfilUserPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
