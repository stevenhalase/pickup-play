import { Component, Input } from '@angular/core';
import { PickupGame } from 'src/app/data';

@Component({
  selector: 'app-pickup-game-card',
  templateUrl: 'pickup-game-card.component.html',
  styleUrls: ['pickup-game-card.component.scss'],
})
export class PickupGameCardComponent {
  @Input() pickupGame: PickupGame;
  constructor() {}
}
