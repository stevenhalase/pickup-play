import { User } from './user.data';

export interface Message {
  from: User;
  date: string;
  text: string;
}
