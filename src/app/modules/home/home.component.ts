import { Component, OnInit } from '@angular/core';
import { PickupGame, Sports } from 'src/app/data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  pickupGame: PickupGame = {
    owner: {
      username: 'stevenhalase',
      firstName: 'Steven',
      lastName: 'Halase',
    },
    date: '2023-12-06T05:15:22.412Z',
    location: '563 N Main St. Firestone, CO 80520',
    sport: Sports.BASEBALL,
    participants: [],
  };
  constructor() {}
}
