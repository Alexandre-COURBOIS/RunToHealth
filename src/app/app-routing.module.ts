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


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
