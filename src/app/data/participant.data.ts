import { User } from './user.data';

export enum RSVP {
  CONFIRMED = 'confirmed',
  MAYBE = 'maybe',
}

export interface Participant {
  user: User;
  rsvp: RSVP;
}
