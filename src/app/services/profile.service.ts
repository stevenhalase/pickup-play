import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Profile, Sports } from '../data';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private _userProfile = new BehaviorSubject<Profile>({
    selectedSport: Sports.BASEBALL,
  });
  userProfile$ = this._userProfile.asObservable();

  constructor() {}
}
