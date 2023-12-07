import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PickupGame } from 'src/app/data';
import { PickupGameService } from 'src/app/services';

@Component({
  selector: 'app-find-pickup-game-list',
  templateUrl: 'find-pickup-game-list.component.html',
  styleUrls: ['find-pickup-game-list.component.scss'],
})
export class FindPickupGameListComponent implements OnInit {
  pickupGames$: Observable<PickupGame[]>;
  constructor(private _pickupGameService: PickupGameService) {}

  ngOnInit(): void {
    this.pickupGames$ = this._pickupGameService.getPickupGames();
  }
}
