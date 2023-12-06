import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PickupGame } from '../data';

@Injectable({
  providedIn: 'root',
})
export class PickupGameService {
  private _pickupGames = new BehaviorSubject<PickupGame[]>([]);
  pickupGames$ = this._pickupGames.asObservable();

  constructor() {}
}
