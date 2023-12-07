import { AuthenticationService } from './authentication.service';
import { PickupGameService } from './pickup-game.service';
import { ProfileService } from './profile.service';
import { TitleService } from './title.service';

export const services = [
  AuthenticationService,
  PickupGameService,
  ProfileService,
  TitleService,
];

export * from './authentication.service';
export * from './pickup-game.service';
export * from './profile.service';
export * from './title.service';
