import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { MyPickupGameListComponent } from './my-pickup-game-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyPickupGameListRoutingModule } from './my-pickup-game-list-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyPickupGameListRoutingModule,
    SharedModule,
  ],
  declarations: [MyPickupGameListComponent],
})
export class MyPickupGameListModule {}
