import { Component, OnInit } from '@angular/core';
import { AuthenticationService, ProfileService } from './services';
import { Observable } from 'rxjs';
import { Profile, User } from './data';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  user$: Observable<User>;
  userProfile$: Observable<Profile>;

  constructor(
    private _authenticationService: AuthenticationService,
    private _profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.user$ = this._authenticationService.user$;
    this.userProfile$ = this._profileService.userProfile$;

    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    this.toggleDarkTheme(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addEventListener('change', (mediaQuery) =>
      this.toggleDarkTheme(mediaQuery.matches)
    );
  }

  // Add or remove the "dark" class on the document body
  toggleDarkTheme(shouldAdd: boolean) {
    console.log(shouldAdd);
    document.body.classList.toggle('dark', true);
  }
}
