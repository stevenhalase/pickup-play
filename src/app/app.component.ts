import { Component, OnInit } from '@angular/core';
import {
  AuthenticationService,
  ProfileService,
  TitleService,
} from './services';
import { Observable, BehaviorSubject } from 'rxjs';
import { Profile, User } from './data';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  private _isIos = new BehaviorSubject<boolean>(false);
  isIos$ = this._isIos.asObservable();
  private _isAndroid = new BehaviorSubject<boolean>(false);
  isAndroid$ = this._isAndroid.asObservable();

  menuTitle$: Observable<string>;
  user$: Observable<User>;
  userProfile$: Observable<Profile>;

  constructor(
    private _titleService: TitleService,
    private _platform: Platform,
    private _authenticationService: AuthenticationService,
    private _profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this._isIos.next(this._platform.platforms().includes('ios'));
    this._isAndroid.next(this._platform.platforms().includes('android'));
    this.menuTitle$ = this._titleService.title$;
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
    document.body.classList.toggle('dark', true);
  }
}
