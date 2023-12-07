import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPickupGameListComponent } from './my-pickup-game-list.component';

const routes: Routes = [
  {
    path: '',
    component: MyPickupGameListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPickupGameListRoutingModule {}
