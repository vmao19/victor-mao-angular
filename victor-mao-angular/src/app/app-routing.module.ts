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
    path: 'hobbies',
    loadChildren: () =>
      import('./hobbies/hobbies.module').then(
        (m) => m.HobbiesModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
