import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('../presentation/pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'splash',
    loadChildren: () =>
      import('../presentation/pages/splash/splash.module').then(
        (m) => m.SplashPageModule
      ),
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('../presentation/pages/detail/detail.module').then(m => m.DetailPageModule)
  }  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
