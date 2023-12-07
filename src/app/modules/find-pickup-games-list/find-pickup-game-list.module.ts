import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { FindPickupGameListComponent } from './find-pickup-game-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FindPickupGameListRoutingModule } from './find-pickup-game-list-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindPickupGameListRoutingModule,
    SharedModule,
  ],
  declarations: [FindPickupGameListComponent],
})
export class FindPickupGameListModule {}
