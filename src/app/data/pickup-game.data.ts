import { Sports } from './sports.data';
import { User } from './user.data';

export interface PickupGame {
  owner: User;
  sport: Sports;
  date: string;
  location: string;
  participants: User[];
}
