import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'tabs/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profil-user',
    loadChildren: () => import('./Pages/profil-user/profil-user.module').then( m => m.ProfilUserPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'nutrition',
    loadChildren: () => import('./pages/nutrition/nutrition.module').then( m => m.NutritionPageModule)
  },
  {
    path: 'dejeuner-petitdejeuner',
    loadChildren: () => import('./modals/dejeuner-modal/dejeuner-modal.module').then( m => m.DejeunerModalPageModule)
  },
  {
    path: 'petitdejeuner-modal',
    loadChildren: () => import('./modals/petitdejeuner-modal/petitdejeuner-modal.module').then( m => m.PetitdejeunerModalPageModule)
  },
  {
    path: 'diner-modal',
    loadChildren: () => import('./modals/diner-modal/diner-modal.module').then( m => m.DinerModalPageModule)
  },
  {
    path: 'active-account/:token',
    loadChildren: () => import('./Pages/activate-account/activate-account.module').then( m => m.ActivateAccountPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./Pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'reset-password/:token',
    loadChildren: () => import('./Pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: '404NotFound',
    loadChildren: () => import('./Pages/not-found404/not-found404.module').then( m => m.NotFound404PageModule)
  },
  {
    path: 'add-objectif',
    loadChildren: () => import('./Pages/add-objectif/add-objectif.module').then( m => m.AddObjectifPageModule)
  },
  {
    path: 'objectifs',
    loadChildren: () => import('./Pages/objectifs/objectifs.module').then( m => m.ObjectifsPageModule)
  },
  {
    path: 'update-objectif/:id',
    loadChildren: () => import('./Pages/update-objectif/update-objectif.module').then( m => m.UpdateObjectifPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./Pages/profil/profil.module').then( m => m.ProfilPageModule)
  },


];



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
