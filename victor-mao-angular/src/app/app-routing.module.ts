import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then(
        (m) => m.HomeModule
      ),
  },
  {
    path: 'work',
    loadChildren: () =>
      import('./work/work.module').then(
        (m) => m.WorkModule
      ),
  },
  {
    path: 'play',
    loadChildren: () =>
      import('./play/play.module').then(
        (m) => m.PlayModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
