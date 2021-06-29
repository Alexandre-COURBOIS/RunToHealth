
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroGuard } from './guards/intro.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'profil',
    loadChildren: () => import('./pages/profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'infos',
    loadChildren: () => import('./pages/infos/infos.module').then( m => m.InfosPageModule)
  },
  {
    path: 'objectifs',
    loadChildren: () => import('./pages/objectifs/objectifs.module').then( m => m.ObjectifsPageModule)
  },
  {
    path: 'stats',
    loadChildren: () => import('./pages/stats/stats.module').then( m => m.StatsPageModule)
  },
  {
    path: 'progression',
    loadChildren: () => import('./pages/progression/progression.module').then( m => m.ProgressionPageModule)
  },
  {
    path: 'addObjectif',
    loadChildren: () => import('./pages/add-objectif/add-objectif.module').then( m => m.AddObjectifPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
