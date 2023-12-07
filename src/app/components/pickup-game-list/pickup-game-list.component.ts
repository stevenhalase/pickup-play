import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PickupGame } from 'src/app/data';
import { PickupGameService } from 'src/app/services';

@Component({
  selector: 'app-pickup-game-list',
  templateUrl: 'pickup-game-list.component.html',
  styleUrls: ['pickup-game-list.component.scss'],
})
export class PickupGameListComponent {
  pickupGames$: Observable<PickupGame[]>;
  constructor(private _pickupGameService: PickupGameService) {}

  ngOnInit(): void {
    this.pickupGames$ = this._pickupGameService.getPickupGames();
  }
}
