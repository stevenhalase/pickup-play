import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../data';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private _user = new BehaviorSubject<User>({
    username: 'stevenhalase',
    firstName: 'Steven',
    lastName: 'Halase',
  });
  user$ = this._user.asObservable();

  constructor() {}
}
