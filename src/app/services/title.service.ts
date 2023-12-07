import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable, filter, map } from 'rxjs';

const APP_TITLE = 'PickupPlay';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  private _appTitle = new BehaviorSubject<string>(APP_TITLE);
  appTitle$ = this._appTitle.asObservable();

  private _title = new BehaviorSubject<string>(APP_TITLE);
  title$ = this._title.asObservable();

  constructor(private _router: Router, private _titleService: Title) {
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route: ActivatedRoute = this._router.routerState.root;
          let routeTitle = '';
          while (route!.firstChild) {
            route = route.firstChild;
          }
          if (route.snapshot.data['title']) {
            routeTitle = route!.snapshot.data['title'];
          }
          return routeTitle;
        })
      )
      .subscribe((title: string) => {
        if (title) {
          this._title.next(title);
          this._appTitle.next(`${APP_TITLE} - ${title}`);
          this._titleService.setTitle(this._appTitle.value);
        }
      });
  }
}
