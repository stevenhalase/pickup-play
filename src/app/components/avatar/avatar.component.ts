import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/data';

@Component({
  selector: 'app-avatar',
  templateUrl: 'avatar.component.html',
  styleUrls: ['avatar.component.scss'],
})
export class AvatarComponent implements OnChanges {
  @Input() user: User;
  @Input() showUsername = true;

  private _initials = new BehaviorSubject<string>('');
  initials$ = this._initials.asObservable();

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes['user'].currentValue &&
      this._getInitials(
        `${changes['user'].currentValue.firstName} ${changes['user'].currentValue.lastName}`
      ) !== this._initials.value
    ) {
      this._initials.next(
        this._getInitials(
          `${changes['user'].currentValue.firstName} ${changes['user'].currentValue.lastName}`
        )
      );
    }
  }

  private _getInitials(name: string) {
    console.log('name', name);
    return name
      .split(' ')
      .map((n) => n[0])
      .join('');
  }
}
