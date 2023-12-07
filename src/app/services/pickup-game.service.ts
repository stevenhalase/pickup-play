import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { PickupGame, RSVP, Sports } from '../data';
import { mockUser1, mockUser2, mockUser3, mockUser4 } from './mockUsers';

@Injectable({
  providedIn: 'root',
})
export class PickupGameService {
  private _pickupGames = new BehaviorSubject<PickupGame[]>([
    {
      id: '1',
      owner: mockUser1,
      title: 'Pickup Game',
      description: 'Looking for 8-10 guys for pickup game @ Hart Park',
      date: '2023-12-06T05:15:22.412Z',
      location: {
        address: '467 Jackson Ave Firestone, CO 80520',
        lat: 40.115366,
        lng: -104.931752,
      },
      sport: Sports.BASEBALL,
      participants: [
        {
          user: mockUser2,
          rsvp: RSVP.CONFIRMED,
        },
        {
          user: mockUser3,
          rsvp: RSVP.MAYBE,
        },
        {
          user: mockUser4,
          rsvp: RSVP.CONFIRMED,
        },
      ],
      messages: [
        {
          from: mockUser1,
          date: '2023-12-06T08:35:22.412Z',
          text: '👀👀👀',
        },
        {
          from: mockUser2,
          date: '2023-12-06T08:30:22.412Z',
          text: '🔥',
        },
        {
          from: mockUser2,
          date: '2023-12-06T08:29:22.412Z',
          text: 'Lets get it',
        },
        {
          from: mockUser1,
          date: '2023-12-06T06:35:22.412Z',
          text: 'Yo whats up guys',
        },
      ],
    },
    {
      id: '2',
      owner: mockUser1,
      title: 'Pickup Game',
      description: 'Looking for 8-10 guys for pickup game @ Hart Park',
      date: '2023-12-06T05:15:22.412Z',
      location: {
        address: '467 Jackson Ave Firestone, CO 80520',
        lat: 40.115366,
        lng: -104.931752,
      },
      sport: Sports.BASEBALL,
      participants: [
        {
          user: mockUser2,
          rsvp: RSVP.CONFIRMED,
        },
        {
          user: mockUser3,
          rsvp: RSVP.MAYBE,
        },
        {
          user: mockUser4,
          rsvp: RSVP.CONFIRMED,
        },
      ],
      messages: [],
    },
    {
      id: '3',
      owner: mockUser1,
      title: 'Pickup Game',
      description: 'Looking for 8-10 guys for pickup game @ Hart Park',
      date: '2023-12-06T05:15:22.412Z',
      location: {
        address: '467 Jackson Ave Firestone, CO 80520',
        lat: 40.115366,
        lng: -104.931752,
      },
      sport: Sports.BASEBALL,
      participants: [
        {
          user: mockUser2,
          rsvp: RSVP.CONFIRMED,
        },
        {
          user: mockUser3,
          rsvp: RSVP.MAYBE,
        },
        {
          user: mockUser4,
          rsvp: RSVP.CONFIRMED,
        },
      ],
      messages: [],
    },
    {
      id: '4',
      owner: mockUser1,
      title: 'Pickup Game',
      description: 'Looking for 8-10 guys for pickup game @ Hart Park',
      date: '2023-12-06T05:15:22.412Z',
      location: {
        address: '467 Jackson Ave Firestone, CO 80520',
        lat: 40.115366,
        lng: -104.931752,
      },
      sport: Sports.BASEBALL,
      participants: [
        {
          user: mockUser2,
          rsvp: RSVP.CONFIRMED,
        },
        {
          user: mockUser3,
          rsvp: RSVP.MAYBE,
        },
        {
          user: mockUser4,
          rsvp: RSVP.CONFIRMED,
        },
      ],
      messages: [],
    },
    {
      id: '5',
      owner: mockUser1,
      title: 'Pickup Game',
      description: 'Looking for 8-10 guys for pickup game @ Hart Park',
      date: '2023-12-06T05:15:22.412Z',
      location: {
        address: '467 Jackson Ave Firestone, CO 80520',
        lat: 40.115366,
        lng: -104.931752,
      },
      sport: Sports.BASEBALL,
      participants: [
        {
          user: mockUser2,
          rsvp: RSVP.CONFIRMED,
        },
        {
          user: mockUser3,
          rsvp: RSVP.MAYBE,
        },
        {
          user: mockUser4,
          rsvp: RSVP.CONFIRMED,
        },
      ],
      messages: [],
    },
    {
      id: '6',
      owner: mockUser1,
      title: 'Pickup Game',
      description: 'Looking for 8-10 guys for pickup game @ Hart Park',
      date: '2023-12-06T05:15:22.412Z',
      location: {
        address: '467 Jackson Ave Firestone, CO 80520',
        lat: 40.115366,
        lng: -104.931752,
      },
      sport: Sports.BASEBALL,
      participants: [
        {
          user: mockUser2,
          rsvp: RSVP.CONFIRMED,
        },
        {
          user: mockUser3,
          rsvp: RSVP.MAYBE,
        },
        {
          user: mockUser4,
          rsvp: RSVP.CONFIRMED,
        },
      ],
      messages: [],
    },
  ]);
  private _pickupGames$ = this._pickupGames.asObservable();

  constructor() {}

  getPickupGames(): Observable<PickupGame[]> {
    return this._pickupGames$;
  }
}
