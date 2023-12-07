import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindPickupGameListComponent } from './find-pickup-game-list.component';

const routes: Routes = [
  {
    path: '',
    component: FindPickupGameListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindPickupGameListRoutingModule {}
