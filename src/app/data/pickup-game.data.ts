import { Message } from './message.data';
import { Participant } from './participant.data';
import { Sports } from './sports.data';
import { User } from './user.data';

export interface Location {
  address: string;
  lat: number;
  lng: number;
}

export interface PickupGame {
  id: string;
  owner: User;
  sport: Sports;
  title: string;
  description: string;
  date: string;
  location: Location;
  participants: Participant[];
  messages: Message[];
}
