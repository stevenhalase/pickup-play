import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  RouterStateSnapshot,
} from '@angular/router';
import { IonMenu } from '@ionic/angular';
import { BehaviorSubject, filter, switchMap, map, withLatestFrom } from 'rxjs';

interface MenuItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-navigation-menu',
  templateUrl: 'navigation-menu.component.html',
  styleUrls: ['navigation-menu.component.scss'],
})
export class NavigationMenuComponent implements OnInit {
  @ViewChild('menu') menu: IonMenu;

  private _menuItems = new BehaviorSubject<MenuItem[]>([
    {
      label: 'My Pickup Games',
      route: 'my-pickup-games',
    },
    {
      label: 'Find Pickup Games',
      route: 'find-pickup-games',
    },
    {
      label: 'Profile',
      route: 'profile',
    },
    {
      label: 'Settings',
      route: 'settings',
    },
    {
      label: 'Logout',
      route: '',
    },
  ]);
  menuItems$ = this._menuItems.asObservable();

  private _activatedMenuItem = new BehaviorSubject<MenuItem | null>(null);
  activatedMenuItem$ = this._activatedMenuItem.asObservable();

  constructor(private _router: Router) {}

  ngOnInit(): void {
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route: RouterStateSnapshot = this._router.routerState.snapshot;
          return route.url;
        }),
        withLatestFrom(this.menuItems$)
      )
      .subscribe(([activatedRouteUrl, menuItems]) => {
        console.log(activatedRouteUrl);
        if (activatedRouteUrl && menuItems) {
          const matchingMenuItem = menuItems.find((menuItem) =>
            activatedRouteUrl.includes(menuItem.route)
          );
          this._activatedMenuItem.next(matchingMenuItem || null);
        }
      });
  }

  navigate(route: string) {
    console.log('route:::', route);
    this._router.navigate([route]);
    this.menu.close();
  }
}
