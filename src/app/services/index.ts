import { AuthenticationService } from './authentication.service';
import { ProfileService } from './profile.service';

export const services = [AuthenticationService, ProfileService];

export * from './authentication.service';
export * from './profile.service';
