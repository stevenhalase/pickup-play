import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'my-pickup-games',
    pathMatch: 'full',
  },
  {
    path: 'my-pickup-games',
    loadChildren: () =>
      import('./modules/my-pickup-games-list/my-pickup-game-list.module').then(
        (m) => m.MyPickupGameListModule
      ),
    data: { title: 'My Pickup Games' },
  },
  {
    path: 'find-pickup-games',
    loadChildren: () =>
      import(
        './modules/find-pickup-games-list/find-pickup-game-list.module'
      ).then((m) => m.FindPickupGameListModule),
    data: { title: 'Find Pickup Games' },
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./modules/profile/profile.module').then((m) => m.ProfileModule),
    data: { title: 'Profile' },
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./modules/settings/settings.module').then(
        (m) => m.SettingsModule
      ),
    data: { title: 'Settings' },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
