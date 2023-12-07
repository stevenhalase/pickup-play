import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../data';
import { mockUser1 } from './mockUsers';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private _user = new BehaviorSubject<User>(mockUser1);
  user$ = this._user.asObservable();

  constructor() {}

  updateUser(user: User) {
    this._user.next(user);
  }
}
